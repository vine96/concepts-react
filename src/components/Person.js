function Person({age, photo, name, occupation}){
    return(
        <div>
        <img src={photo} alt={name} />
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {occupation}</p>
        </div>
    )
}

export default Person