const argv = require('./config/yargs').argv;
const colors = require('colors');

const crearTodo = require('./config/todo');

let comando = argv._[0];

switch (comando){

	case 'crear':

		let tarea = crearTodo.crearTodo(argv.descripcion);

		break;

	case 'listar':

		let listado = crearTodo.getListado();

		console.log('\n======== POR HACER ========'.green);

		for (let listarTareas of listado) {

			console.log('Tarea:', listarTareas.description);
			console.log('Completado:', listarTareas.completado);
			console.log('==========================='.green);			

		}

		break;
	case 'actualizar':
		
		let actualizado = crearTodo.actualizar(argv.descripcion, argv.completado);

		break;

	case 'borrar':
		
		let borrar = crearTodo.eliminar(argv.descripcion);
		console.log(borrar);
		break;
	
	default:

		console.log('COMANDO NO RECONOCIDO');
		break;

}