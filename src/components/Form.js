function Form(){

    function registerUser(e){
        e.preventDefault()
        console.log('Usuário cadastrado!');
    }

    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form