// Importar Router de Express
import {Router} from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router();
// Importar los metodos del controlador
import {
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
} from "../controllers/veterinario_controller.js";
import { validacionVeterinario } from "../middlewares/validacionVeterinario.js";
// Crear una instancia de Router()
router.post("/login", login);
router.post("/registro", validacionVeterinario, registro);
router.get("/confirmar/:token", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.post("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/:token", comprobarTokenPasword);
router.post("/nuevo-password/:token", nuevoPassword);

router.get("/perfil", verificarAutenticacion, perfil);
router.put("/veterinario/actualizarpassword",verificarAutenticacion,actualizarPassword);
router.get("/veterinario/:id", verificarAutenticacion, detalleVeterinario);
router.put("/veterinario/:id", verificarAutenticacion, actualizarPerfil);
// Exportar la variable router
export default router;
