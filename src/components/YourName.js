function YourName({setName}){
    return(
        <>
            <p>Digite o seu nome:</p>
            <input 
                type="text" 
                placeholder="Qual é o seu nome?" 
                onChange={(e) => setName(e.target.value)} 
            />
        </>
    )
}

export default YourName