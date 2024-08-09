import PropTypes from 'prop-types'

function Item({brand = 'Faltou a marca papai', release_year = 0}){
    return(
        <>
            <li>{brand} - {release_year}</li>
        </>
    )
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    release_year: PropTypes.number.isRequired
}

export default Item