//...........CLASES..........//
class Animal {
    //....CONSTRUCTOR....//
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${color}`;
    }
    //....MÉTODO.....//
    verInfo() {
        document.writeln(this.info + "<br>");
    }
}

//...........HERENCIA............

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    static ladrar(){
        alert("WOW!");
    }
}

const perro = new Animal("perro", 4, "negro","doberman");
const gato = new Animal("gato", 3, "gris");
const pajaro = new Animal("pajaro", 1, "verde");

Perro.ladrar();