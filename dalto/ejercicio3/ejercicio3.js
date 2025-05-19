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

class CeularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color, peso, tamaño, rdc, ram);
        this.rdce = rdce;
    }
    grabarVideoLeto(){
        alert("Esta grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolución de camara extra: ${this.rdce}`;
    }
}

let celular1= new CeularAltaGama("negro","130g","5'", "4k","3GB","full hd")
let celular2= new CeularAltaGama("rojo","140g","5.5'", "1860","4GB","hd")

document.writeln( `
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}<br>`
);