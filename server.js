import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware para procesar datos en formato JSON
server.use(jsonServer.bodyParser);
// Middleware personalizado para manejar CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Reemplaza con tu URL de frontend
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.get("/categorias", (req, res) => {
  const categorias = router.db.get("categorias").value();
  res.json(categorias);
});
// Middleware para manejar la creación y verificación de usuarios
server.post("/user/register", (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      const error = new Error("Todos los campos son obligatorios.");
      error.statusCode = 400;
      throw error;
    }

    const existingUser = router.db.get("user").find({ email }).value();

    if (existingUser) {
      const error = new Error("el usuario ya se encuentra registrado.");
      error.statusCode = 409;
      throw error;
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password,
    };

    router.db.get("user").push(newUser).write();
    const fakeToken = "token123456789";

    return res.send({
      message: "Usuario registrado exitosamente.",
      token: fakeToken,
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    const statusCode = error.statusCode || 500;
    return res
      .status(statusCode)
      .json({ error: error.message || "Error interno del servidor." });
  }
});

// Middleware para maneja iniciar session de usuarios
server.post("/user/login", (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Todos los campos son obligatorios.");
      error.statusCode = 400;
      throw error;
    }
    const user = router.db.get("user").find({ email }).value();
    if (!user) {
      const error = new Error("El usuario no se encuentra registrado.");
      error.statusCode = 401;
      throw error;
    }
    if (user.password !== password) {
      const error = new Error("La contraseña es incorrecta.");
      error.statusCode = 401;
      throw error;
    }
    const fakeToken = "token123456789";
    return res.send({
      message: "Inicio de sesión exitoso.",
      token: fakeToken,
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    const statusCode = error.statusCode || 500;
    return res
      .status(statusCode)
      .json({ error: error.message || "Error interno del servidor." });
  }
});
// Middleware para manejar el resto de las rutas (todas las rutas definidas en db.json)
server.use(middlewares);
server.use(router);
const PORT = 3001;
server.listen(PORT, () => {
  console.log("JSON Server is running on http://localhost:" + PORT);
});
