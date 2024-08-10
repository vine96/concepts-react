function Greeting({name}){
    function makeGreeting(){
        return `Olá meu querido amigo: ${name}` 
    }
    return(
        <>
            { name && <p>{makeGreeting()}</p>}
        </>
    )
}

export default Greeting