function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var tipoVehiculo = document.getElementById("tipo-vehiculo").value;
    var marca = document.getElementById("marca").value;
    var placa = document.getElementById("placa").value;
    var mantenimiento = document.querySelector('input[name="mantenimiento"]:checked').value;

    var datos = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      sexo: sexo,
      tipoVehiculo: tipoVehiculo,
      marca: marca,
      placa: placa,
      mantenimiento: mantenimiento
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar_datos.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    
      }
    };
    xhr.send(JSON.stringify(datos));
  }