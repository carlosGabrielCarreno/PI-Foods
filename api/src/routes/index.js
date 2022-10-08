const { Router } = require('express');
const {
  getRecipesByName,
  getDetailOfRecipe,
  createRecipe,
  getDietTypes,
} = require('../controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/* 
GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado
*/
router.get('/', getRecipesByName);
/* 
GET /recipes/{idReceta}:
Obtener el detalle de una receta en particular
Debe traer solo los datos pedidos en la ruta de detalle de receta
Incluir los tipos de dieta asociados
*/
router.get('/:id', getDetailOfRecipe);
/* 
 POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas.
*/
router.post('/', createRecipe);
/* 
GET /diets:
Obtener todos los tipos de dieta posibles
En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
*/
router.get('/diets', getDietTypes);

module.exports = router;
