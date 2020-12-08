const fs = require('fs');

let listado = [];

const guardarTodo = ()=>{

	let data = JSON.stringify(listado);

	fs.writeFile(`./db/data.json`, data, (err)=>{
	 	if(err){
	 		reject(err);
	 	}
	 })

}

const cargarDB = ()=>{

	try{

		listado = require('../db/data.json');

	}catch(error){

		listado = [];

	}
	

}

const eliminar = (description)=>{

	cargarDB();

	let nuevoListado = listado.filter(tarea => tarea.description !== description);

	if(listado.length === nuevoListado.length){
		return false;
	}else{

		listado = nuevoListado;
		guardarTodo();
		return true;

	}

}

const getListado = ()=>{

	cargarDB();
	return listado;

}

const crearTodo = (description)=>{

	cargarDB();

	let todos = {
		description,
		completado:false
	};

	listado.push(todos);

	guardarTodo();

	return todos;

}

const actualizar = (description, completado = true)=>{

	cargarDB();

	let index = listado.findIndex(tarea => tarea.description === description);

	if(index >= 0){

		listado[index].completado = completado;
		guardarTodo();
		return true;

	}else{
		return false;
	}

}


module.exports = {
	crearTodo,
	guardarTodo,
	getListado,
	actualizar,
	eliminar
}