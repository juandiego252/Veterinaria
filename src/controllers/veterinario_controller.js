import Veterinario from "../models/Veterinario.js";

// Metodo para el login
const login = (req, res) => {
    res.status(200).json({ res: "login del veterinario" });
};
// Metodo para el perfil
const perfil = (req, res) => {
    res.status(200).json({ res: "perfil del veterinario" });
};
// Metodo para el registro
const registro = async (req, res) => {
    const { email, password } = req.body;
    if (Object.values(req.body).includes(""))
      return res
        .status(400)
        .json({ msg: "Lo sentimos, debes llenar todos los campos" });
    const verificarEmailBDD = await Veterinario.findOne({ email });
    if (verificarEmailBDD)
      return res
        .status(400)
        .json({ msg: "Lo sentimos, el email ya se encuentra registrado" });
    const nuevoVeterinario = new Veterinario(req.body);
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password);
    nuevoVeterinario.crearToken();
    await nuevoVeterinario.save();
    res.status(200).json({ nuevoVeterinario });
};
// Confirmar el token
const confirmEmail = (req, res) => {
    res.status(200).json({ res: "confirmar email de registro de veterinario" });
};
// Listar veterinarios
const listarVeterinarios = (req, res) => {
    res.status(200).json({ res: "lista de veterinarios registrados" });
};
// Metodo detalle de un veterinario
const detalleVeterinario = (req, res) => {
    res.status(200).json({ res: "detalle de un eterinario registrado" });
};
// Metodo para actulizar el perfil
const actualizarPerfil = (req, res) => {
    res
        .status(200)
        .json({ res: "actualizar perfil de un veterinario registrado" });
};
// Metodo para actulizar el password
const actualizarPassword = (req, res) => {
    res
        .status(200)
        .json({ res: "actualizar password de un veterinario registrado" });
};
// Metodo para recuperar el password
const recuperarPassword = (req, res) => {
    res.status(200).json({ res: "enviar mail recuperación" });
};
// Metodo para comprobar el Token
const comprobarTokenPasword = (req, res) => {
    res.status(200).json({ res: "verificar token mail" });
};
// Metodo para crear el nuevo password
const nuevoPassword = (req, res) => {
    res.status(200).json({ res: "crear nuevo password" });
};

// Exportar cada uno de los metodos
export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
};
