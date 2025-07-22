const { default: makeWASocket, useSingleFileAuthState, downloadContentFromMessage } = require("@whiskeysockets/baileys")
const Tesseract = require("tesseract.js")
const axios = require("axios")
const fs = require("fs")
const path = require("path")

const { state, saveState } = useSingleFileAuthState('./auth.json')

async function iniciarBot() {
  const sock = makeWASocket({ auth: state })
  sock.ev.on('creds.update', saveState)

  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0]
    if (!msg.message?.imageMessage) return

    try {
      const senderJid = msg.key.remoteJid
      const numero = senderJid.split("@")[0]

      console.log("📩 Recibida imagen de:", numero)

      // 🔍 Paso 1. Consultar backend para obtener id de alumna
      const alumnaResponse = await axios.get(`http://localhost:8080/alumnas/telefono/${numero}`)
      const alumnaData = alumnaResponse.data

      if (!alumnaData.found) {
        console.log("❌ Alumna no encontrada para el número:", numero)
        return
      }

      const idAlumna = alumnaData.id
      const nombreAlumna = alumnaData.nombre

      console.log(`✅ Alumna identificada: ${nombreAlumna} (ID: ${idAlumna})`)

      // 🔍 Paso 2. Descargar la imagen
      const tempPath = await descargarImagen(msg.message.imageMessage, numero)

      // 🔍 Paso 3. Leer texto con OCR
      const datos = await leerConOCR(tempPath)

      // 🔍 Paso 4. Armar JSON para enviar al backend
      
      const comprobante = {
        alumna_id: idAlumna,
        alumna_nombre: nombreAlumna,
        fecha_pago: datos.fecha,
        nombre_pagador: datos.nombre,
        cuil: datos.cuil,
        monto: datos.monto
      }

      console.log("📤 Datos parseados:", comprobante)

      // 🔍 Paso 5. POST al backend para guardar comprobante
      const saveResponse = await axios.post("http://localhost:8080/comprobantes", comprobante)
      console.log("✅ Backend respondió:", saveResponse.data)

      // 🔍 Paso 6. Confirmación al usuario
      await sock.sendMessage(senderJid, { text: `✅ Hola ${nombreAlumna}, tu comprobante fue cargado correctamente por $${datos.monto}.` })

      // Eliminar imagen temporal
      fs.unlinkSync(tempPath)

    } catch (err) {
      console.error("❌ Error procesando mensaje:", err)
    }
  })
}

async function descargarImagen(imageMessage, numero) {
  const stream = await downloadContentFromMessage(imageMessage, "image")
  const filename = `comprobante_${numero}_${Date.now()}.jpg`
  const filepath = path.join(__dirname, filename)
  const writeStream = fs.createWriteStream(filepath)

  for await (const chunk of stream) {
    writeStream.write(chunk)
  }

  writeStream.end()

  return filepath
}

async function leerConOCR(filepath) {
  console.log("🔍 Procesando OCR en:", filepath)

  const resultado = await Tesseract.recognize(
    filepath,
    'spa', // Usa 'spa' si tus comprobantes están en español
    { logger: m => console.log(m) }
  )

  const texto = resultado.data.text

  console.log("📄 Texto OCR leído:\n", texto)

  // 🔧 Parseo con regex – ajusta a tu comprobante real
  return {
    monto: extraerDato(texto, /Monto:\s*\$?(\d+(\.\d+)?)/i),
    fecha: extraerDato(texto, /Fecha:\s*(\d{2}\/\d{2}\/\d{4})/i),
    cuil: extraerDato(texto, /CUIL:\s*([0-9\-]+)/i),
    nombre: extraerDato(texto, /Nombre:\s*([A-Za-z\s]+)/i)
  }
}

function extraerDato(texto, regex) {
  const match = texto.match(regex)
  return match ? match[1].trim() : null
}

iniciarBot()
