// Arq. Hexagonal
// Domain
class Medic {

    name: string
    lastname!: string // obligatorio pasar el valor del tipo correspondiente (required) con la salvedad de no aceptar ni null ni undefined (!)
    codMed: number // number || undefined || null  si se ocupa el operador (?)
    //readonly fullname: string
    // height: any / puede aceptar valores de cualquier tipo o cualquier cosa 

    // bad practice: dejar declarado en desorden el orden los parámetros, instanciar objetos y sobrecargar el constructor
    // bad practice: ocupar tipos any
    // admisible en el constructor: inicializar tus props, super/hereder/ validaciones

    // forma 1
    /*constructor(name: string, lastname: string, codMed: number) {
        this.name = name
        this.lastname = lastname
        this.codMed = codMed 
    }*/

    // forma 2
    /*constructor(public name: string, public lastname: string, public codMed: number) {

    }*/

    // forma 3
    /*name = "Pedrito"
    lastname = "Alejos"
    codMed = 785*/

    // forma 3 pero con las propiedades inicializadas al inicio de la clase
    constructor(name: string, lastname: string, codMed: number) {
        this.name = name
        this.lastname = lastname
        this.codMed = codMed
        //this.fullname = `${this.name} ${this.lastname}`

    }

    // el constructor es lo primero que se ejecuta en el ciclo de vida de una clase
    /*constructor() {
        this.initialize()
    }

    initialize() {
        this.name = "Miguel"
        this.lastname = "Chamorro"
        this.codMed = 785
    }*/
}

const medic: Medic = new Medic("Miguel", "Chamorro", 14)
console.log(medic)