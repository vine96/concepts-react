import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <Item brand="Renault Kwid" release_year={2020}/>
            <Item brand="Jeep Renegade" release_year={2015}/>
            <Item/>
        </ul>
        </>
    )
}

export default List