import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware para procesar datos en formato JSON
server.use(jsonServer.bodyParser);
server.get('/categorias', (req, res) => {
    const categorias = router.db.get('categorias').value()
    res.json(categorias)
})
// Middleware para manejar la creación y verificación de usuarios
server.post('/user/register', (req, res) => {
    // Obtener datos del cuerpo de la solicitud
    console.log('Recibida solicitud de registro:', req.body);
    const { username, email, password } = req.body;
    console.log({username,email,password})
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    
    // Verificar si el usuario ya está registrado
    const existingUser = router.db
        .get('user')
        .find({ email })
        .value();

    // Si el usuario ya está registrado, enviar un error
    if (existingUser) {
        return res.status(400).json({ error: 'El usuario ya tiene una cuenta.' });
    }

    // Si el usuario no está registrado, crear uno nuevo
    const newUser = {
        id: Date.now(), // Puedes usar un método más robusto para generar IDs
        username,
        email,
        password,
    };

    // Agregar el nuevo usuario a la base de datos
    router.db.get('user').push(newUser).write();
    const fakeToken="token123456789"

    // Enviar respuesta exitosa y el token falso
    return res.json({ message: 'Usuario registrado exitosamente.',token:fakeToken });
});


// Middleware para manejar el resto de las rutas (todas las rutas definidas en db.json)
server.use(middlewares)
server.use(router);
const PORT = 3001
server.listen(PORT, () => {
    console.log('JSON Server is running on http://localhost:' + PORT);
});
