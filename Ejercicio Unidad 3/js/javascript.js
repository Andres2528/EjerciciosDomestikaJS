function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida

  var mensaje = "";
  var mensajeEdad = "";

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  if(edad < 90){
    mensajeEdad = " Wow que Joven!"
  }
  else if(edad > 90 && fecha != ""){
    mensajeEdad = "Abuel@"
  }

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene
  if(nombre === "" || fecha === ""){
    mensaje = "<p>Datos vacios por favor verifique.</p>";
  }
  else{

  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado
  mensaje = "<p>Hola " + nombre + " Tu edad es de: " + edad + mensajeEdad +"</p>";
  }
  
  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
