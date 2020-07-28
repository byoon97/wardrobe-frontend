import React from 'react'

const ClothingCard = props => {
    let { name, size, category, id } = props
    return (
        <div id={id}>
            <h2>Name: {name}</h2>
            <h3>Size: {size}</h3>
        </div>
    )

}

export default ClothingCard