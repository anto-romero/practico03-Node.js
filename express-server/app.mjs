import express from "express";

//crear una instancia de Express
const app = express();

//configurar el puerto en el que el servidor escuchara
const PORT = 3000;

//ruta basica
app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

//iniciar el servidor
app.listen(PORT, () => {
  console.log(`El servidor corriendo en http://localhost:${PORT}`);
});

//ruta GET para el home
app.get("/home", (req, res) => {
  res.send("Página de inicio");
});

//ruta GET para recibir datos simples
//solicitud: http://localhost:3000/data
app.get("/data", (req, res) => {
  res.send("Datos recibidos");
});

//ruta GET con parametro de ruta
//solicitud: http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario con ID: ${userId}`);
});

//ruta GET con multiples parametros
//solicitud:  http://localhost:3000/product/electronics/456

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Categoria: ${category}, ID del procudto: ${id}`);
});

//ruta GETa con parametro de consulta
//solicitud : http://localhost:3000/search?q=javascript
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Resultados de búsqueda para: ${query}`);
});

//ruta GET con multiples parametros de consulta
//solicitud : http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get("/filter", (req, res) => {
  const { type, minPrice, maxPrice } = req.query;
  res.send(
    `Filtrar por tipo: ${type}, rango de precios: ${minPrice}- ${maxPrice}`
  );
});


