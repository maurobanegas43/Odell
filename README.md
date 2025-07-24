# 💃 **O'Dell - Sistema de Gestión de Academia de Baile**

## 📌 **Descripción del Proyecto**

O’Dell es un **sistema web de gestión interna** desarrollado para una academia de baile, permitiendo al administrador gestionar:

- 👤 **Alumnas**: registrar, modificar, eliminar, buscar, y visualizar su situación académica y arancelaria.  
- 👗 **Inventario**: administrar accesorios y vestidos (crear, modificar, borrar, vender accesorios).  
- 💰 **Comprobantes**: registrar pagos de las alumnas y ver su historial arancelario.

---

## 🛠️ **Tecnologías Utilizadas**

- **Frontend:** React.js  
- **Backend:** Go (Golang) con Gin Gonic  
- **Base de Datos:** MySQL / MariaDB  
- **Otros:** HTML, CSS, UML para documentación

---

## ✅ **Funcionalidades Principales**

1. **Login (Admin)**  
   - Iniciar sesión con usuario y contraseña fijos (no modificables vía sistema).

2. **Gestión de Alumnas**  
   - Registrar nueva alumna  
   - Modificar datos de alumna  
   - Borrar alumna  
   - Buscar alumna por nombre  
   - Ver situación académica  
   - Ver situación arancelaria  
   - Registrar comprobantes de pago

3. **Gestión de Inventario**  
   - Visualizar accesorios y vestidos  
   - Crear, modificar y borrar accesorios  
  
   - Crear y borrar vestidos

4. **Comprobantes**  
   - Registrar nuevos pagos de alumnas  
   - Visualizar historial de pagos

---

## 📝 **Documentación UML**

Se desarrollaron los siguientes diagramas respetando las normas UML:

- ✔️ **Diagrama de Casos de Uso**  
- ✔️ **Diagrama de Clases**  
- ✔️ **Diagrama de Secuencia**  
- ✔️ **Modelo de Dominio**

---

## 🎯 **Actores del Sistema**

- **Admin:** único usuario del sistema, gestiona alumnas, comprobantes, accesorios y vestidos.  
  - *Nota:* Para cambios de usuario/contraseña se debe contactar al desarrollador.

---

## 🚀 **Cómo Ejecutar el Proyecto**

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/odell.git
