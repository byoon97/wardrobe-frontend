import React, { Component } from 'react'

const WardrobeCard = (props) => {
    const { name, id, image, size, category, handleSelectedItem, deleteClothe } = props
    
    return (
        <tr>
              <td className="border-t px-2 py-2">{size}</td>
              <td className="border-t px-2 py-2"><a href="#"><img className="inline-block mr-2 rounded-full" src="placeholders/pictures/male_avatar.svg" alt="" height="40" width="40"/>{name}</a></td>
              <td className="border-t px-2 py-2"><img onClick={() => handleSelectedItem(id)} src={image}/></td>
              <td className="border-t px-2 py-2">{category}</td>
              <td className="text-center border-t px-2 py-2"><a className="text-blue-700 hover:underline" href="#" onClick={(event) => deleteClothe(event, id)}>delete</a></td>
        </tr>
    )
}

export default WardrobeCard