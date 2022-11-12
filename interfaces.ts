// forma 1
/*interface Medic {
    name: string;
    lastname: string;
    codMed: number;
}

const medic = { lastname: "Miguel", name: "Chamorro", codMed: 12 }
console.log(medic)*/

// forma 2
interface Medic2 {
    name: string;
    lastname: string;
    codMed: number;
}

class Medic {
    name: string;
    lastname: string;
    codMed: number;

    constructor({name, lastname, codMed }: Medic2 ) {
        this.name = name
        this.lastname = lastname
        this.codMed = codMed
    }
}

const medic = new Medic({ lastname: "Chamorro", name: "Miguel", codMed: 12 })
console.log(medic)