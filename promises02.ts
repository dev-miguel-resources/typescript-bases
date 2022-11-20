// Promises: Async-Await: Syntax Sugar
const executePromise = async () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolve ok with async/await")
        }, 3000)
    })

    try {
        const resolvePromise = await promise
        console.log(resolvePromise)
    } catch(error) {
        console.log(error)
    }
}

executePromise()