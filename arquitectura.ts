// Example Arq. Hexagonal
// Arq.Hexagonal (Diseño orientado al Dominio - DDD)

/*abstract class MedicRepository {

}*/

// Domain-Repository / design pattern: facade
interface MedicRepository {
    insert(medic: Medic): Medic;
}

// Domain
class Medic {

    constructor(public name: string, public lastname: string, public codMed: number) {
        if (this.name.trim().length < 4) {
            throw new Error("El nombre al menos debe contener 4 caracteres")
        }
        if (this.codMed < 10000 || this.codMed > 99999) {
            throw new Error("El codMed debe tener 5 dígitos")
        }
    }
}

// Application
class MedicApplication {

}


// Infraestructure
class MedicInfraestructure implements MedicRepository {

    insert(medic: Medic) {
        this.validation(medic);
        return medic
    }

    validation(medic: Medic) {
        return true;
    }

}

const medic: Medic = new Medic("Miguel", "Chamorro", 14000)
const Infraestructure: MedicInfraestructure = new MedicInfraestructure()
const application: MedicApplication = new MedicApplication()
console.log(medic)