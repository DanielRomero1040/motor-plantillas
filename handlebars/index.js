const { query } = require("express");
const express = require("express");
const handlebars = require("express-handlebars");


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
app.engine(
    "hbs",
    handlebars({
        extname:"hbs",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "main"
    })
    )
app.set("views", "./views");
app.set("view engine", "hbs");
    
app.use("/api/productos", productsRoute);    



app.listen(8080, ()=>{
    console.log("server run on port 8080");
});