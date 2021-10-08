const { query } = require("express");
const express = require("express");
const ejs = require("ejs");


const contenedor = require ('./manejo-archivos');

//------------ require rutas ---------------
const productsRoute = require("./routes/products");

const newContainer = new contenedor.Contenedor;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//----------- Archivos estaticos para iniciar la aplicacione web-----------
app.use(express.static('files'));


//---------- Configuracion del engine de las plantillas -----

app.set("views", "./views");
app.set("view engine", "ejs");
    
app.use("/api/productos", productsRoute);    



app.listen(8090, ()=>{
    console.log("server run on port 8090");
});