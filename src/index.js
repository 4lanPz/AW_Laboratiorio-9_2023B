const express = require('express') //inportar la dependecia

const app = express() //crear una instancia

// Ruta raiz
app.get('/',(req,res)=>{
    res.send("BIENVENIDO")
})

// Ruta información
app.get('/info',(req,res)=>{
    res.send(`<h1>Grupo 6</h1>`)
})

// Ruta integrantes
app.get('/integrantes',(req, res)=>{
    res.json(
        [{
            "Nombre":"Nataly",
            "Apellido":"Casillas",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Ariana",
            "Apellido":"Catani",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Dilan",
            "Apellido":"Obando",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            },{
            "Nombre":"Cristhian",
            "Apellido":"Pañora",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
          },{
            "Nombre":"Alan",
            "Apellido":"Perez",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            
            },,{
            "Nombre":"Ingrith",
            "Apellido":"Revelo",
            "Carrera":"Desarrollo de Software",
            "Facultad":"ESFOT",
            "Materia":"Aw"
            }]
    )
})

// Ruta productos
app.get('/productos',(req,res)=>{
    res.send(`
    <h1>Catálogo de repuestos de computadoras de escritorio<h1/>
    <br>
    <h3>GPU<h3/>
    <ul>
    <li>RTX 4060
    <li>RTX 3060
    <li>GTX 1060
    </ul>
    <br>
    <h3>CPU<h3/>
    <ul>
    <li>AMD Ryzen 5 5600x
    <li>Intel i5 11600k
    <li>AMD Ryzen 5 7600
    </ul>
    <br>
    <h3>RAM<h3/>
    <ul>
    <li>T-Force 8GB 3600Mhz CL12
    <li>Viper 8GB 3600Mhz CL16
    <li>Patriot 16GB 5200Mhz CL12
    </ul>
    <br>
    `
    )
})

// Ruta erronea
app.use((req,res)=>{
    res.send("404 - Not found")
})

app.listen(3002) //Servidor en el puerto 3000
console.log("web server ejecutandose en el puerto 3002")

