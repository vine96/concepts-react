import Button from "./Button";

function Event(){

    function  myEvent(){
        console.log(`Ativando primeiro evento!`);
    }

    function secondEvent(){
        console.log('Ativando o segundo evento!');
    }

    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={myEvent} text='Primeiro botão'/>
            <Button event={secondEvent} text='Segundo botão'/>
        </>
    )
}

export default Event