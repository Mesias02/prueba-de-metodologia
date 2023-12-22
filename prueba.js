//ejercicio 1
function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
  
    this.validarPromedio = function() {
      return this.promedio > 70 ? "Aprobado" : "Desaprobado";
    };
  
    this.obtenerUsuario = function() {
      let partesCorreo = this.correo.split('@');
      return partesCorreo[0];
    };
  
    this.ingresarNota = function(nuevaNota) {
      if ( this.nuevaNota === 'number' && nuevaNota >= 0 && nuevaNota <= 100) {
        this.promedio = nuevaNota;
        return "Nota ingresada correctamente. Nuevo promedio: " + this.promedio;
      } else {
        return "Por favor, ingresa una nota válida entre 0 y 100.";
      }
    };
  
    this.ingresarCorreo = function(nuevoCorreo) {
      this.correo = nuevoCorreo;
      return "Correo electrónico actualizado correctamente. Nuevo correo: " + this.correo;
    };
  }
  

  let studentOne = new Student("Mesias", "fato.97.es@gmail.com", 75);
  
  let nuevaNota = parseFloat(prompt("Ingresa la nueva nota del estudiante:"));
  alert(studentOne.ingresarNota(nuevaNota));
  
  let nuevoCorreo = prompt("Ingresa el nuevo correo electrónico del estudiante:");
  alert(studentOne.ingresarCorreo(nuevoCorreo));
  
  alert(studentOne.validarPromedio());
  alert(studentOne.obtenerUsuario());
  
  //ejercicio2

