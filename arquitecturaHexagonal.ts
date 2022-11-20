// Arq.Hexagonal (Diseño orientado al Dominio - DDD)

/*abstract class MedicRepository {
  abstract insert(medic: Medic): Medic

  validation(medic: Medic) {
        return true
   }  
}*/

// Domain-Repository / design pattern: facade
interface MedicRepository {
    insert(medic: Medic): Medic;
}

// Principio SOLID: Single Responsibility
// Principio SOLID: Segregation Interface
// Principio SOLID: Open/Close
// Principio SOLID: Sustitution Liskow
// Principio SOLID: Inversion Dependency

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
class MedicApplication  {
    
    //design pattern: Injection Dependency 
    // si instanceas adentro y no en el constructor se llama sin this
    // si se declara en el constructor con this
    constructor(private infraestructure: MedicRepository) {

    }
    
    insert(medic: Medic) {

        const insertedMedic = this.infraestructure.insert(medic)
        return insertedMedic
        
        /*const infraestructure: MedicInfraestructure = new MedicInfraestructure()
        const isValid = infraestructure.validation(medic)

        if (isValid) {
            const insertedMedic = infraestructure.insert(medic)
            return insertedMedic   
        }
        return null*/
    }
}


// Infraestructure
class MedicInfraestructure implements MedicRepository {

    insert(medic: Medic) {
        //this.validation(medic);
        return medic
    }

    /*validation(medic: Medic) {
        return true
    }*/

}

const medic: Medic = new Medic("Miguel", "Chamorro", 14000)
const infraestructure: MedicRepository = new MedicInfraestructure()
const application: MedicApplication = new MedicApplication(infraestructure)
console.log(application.insert(medic))
//console.log(medic)