class App{
    constructor(decargas, puntuacion,peso){
        this.decargas=decargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada = false;
        this.instalada = false;
    }
    
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("App instalada")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada")
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.iniciada == true){
            this.iniciada = false;
            alert("App apagada");
        }
    }
    appInfo(){ return `Descargas: <b>${this.decargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

let app = new App("16000","5 estrella","900MB")

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.writeln(`${app.appInfo()}<br>`);