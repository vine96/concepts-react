function Event({ number }){

    function  myEvent(){
        console.log(`Fui ativado meu guri! Botão número: ${number}`);
    }

    return(
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={myEvent}>ATIVAR</button>
        </>
    )
}

export default Event