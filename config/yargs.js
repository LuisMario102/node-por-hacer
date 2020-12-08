const descript = {
	demand:true,
	alias:'d',
	desc:'Crear una tarea'
}

const completed = {
	default:true,
	alias:'c',
	desc:'Marcar como completado'
}

const argv = require('yargs')
				.command("crear", 'Crear una tarea', {
					descripcion:descript
				})
				.command("actualizar", 'Actualizar el estado de la tarea',{
					descripcion:descript,
					completado:completed

				})
				.command("borrar", "Eliminar una tarea",{
					descripcion:descript
				})
				.help()
				.argv;

module.exports = {
	argv
}