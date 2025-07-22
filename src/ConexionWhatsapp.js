import makeWASocket from "@whiskeysockets/baileys"
import { useSingleFileAuthState } from "@whiskeysockets/baileys"
import qrcode from 'qrcode-terminal'


const { state, saveState } = useSingleFileAuthState('./auth.json')

async function start() {
  const sock = makeWASocket({
    auth: state
  })

  sock.ev.on('creds.update', saveState)

  sock.ev.on('connection.update', (update) => {
    const { connection, qr, lastDisconnect } = update

    if (qr) {
      console.log("📲 Escanea este código QR con WhatsApp:")
      qrcode.generate(qr, { small: true })
    }

    if(connection === 'open') {
      console.log('✅ Conectado al WhatsApp!')
    }

    if(connection === 'close') {
      const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== 401
      console.log('⚠️ Conexión cerrada. Reintentando:', shouldReconnect)
      // Aquí podrías reiniciar la conexión si quieres
    }
  })

  // Aquí puedes agregar la lógica de recepción de mensajes y demás
  sock.ev.on('messages.upsert', m => {
    // ejemplo básico para mostrar mensaje recibido
    console.log('Mensaje recibido:', m)
  })
}

start()
