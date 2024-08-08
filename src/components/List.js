import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <Item brand="Guaraná Fruki"/>
        </ul>
        </>
    )
}

export default List