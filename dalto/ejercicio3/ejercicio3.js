class Celular {
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    //PAra prender y apagar.
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando celualr")
        } else {
            alert("El celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`Foto tomada en una resolucion de: ${this.rdc}`);
    }
    grabarVideo() {
        alert(`Grabando video en una resolucion de: ${this.rdc}`)
    }
    mobileInfo() {
        return `
        color: <b>${this.color}</b><br>
        peso: <b>${this.peso}</b><br>
        tamaño: <b>${this.tamaño}</b><br>
        resolucion de video: <b>${this.rdc}</b><br>
        memoria ram: <b>${this.ram}</b><br>
        `;
    }
}

let celular1 = new Celular("negro", "150", "5", "full hd", "2GB");
let celular2 = new Celular("azul", "160", "7", "hd", "22GB");
let celular3 = new Celular("blanco", "180", "4", "4k", "164B");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.writeln(
    `
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
    `
);