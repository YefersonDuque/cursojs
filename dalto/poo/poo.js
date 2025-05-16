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
        this.raza = null;
    }
    //....SET....//
    set setRaza(newName){
        this.raza=newName;
    }
    //....GET....// 
    get getRaza(){
        return this.raza;
    }
}
const perro = new Perro("perro",5,"negro","doberman");
perro.setRaza = "Doberman";
document.writeln(perro.getRaza);