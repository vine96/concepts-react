function OtherList({items}){
    return(
        <>
        <h3>Lista de coisas boas:</h3>
        {
            items.length > 0 ? 
            (
                items.map((item, index) => (
                    <p key={index}>{index} - {item}</p>
                ))
            ) : 'Sem conteúdo papai'
        }
        </>
    )
}

export default OtherList