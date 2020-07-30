import React, { Component } from 'react'

const OutfitCard = (props) => {
    const { name, id, category, weekday, user_id, handleSelectedOutfit, deleteOutfit, clothes } = props
    return (
        <tr onClick={() => handleSelectedOutfit(id)}>
              <td className="border-t px-2 py-2"><a href="#"><img className="inline-block mr-2 rounded-full" src="placeholders/pictures/male_avatar.svg" alt="" height="40" width="40"/>{name}</a></td>
              <td className="border-t px-2 py-2">{category}</td>
              <td className="border-t px-2 py-2">{weekday}</td>
              <td onClick={() => deleteOutfit(id)} className="text-center border-t px-2 py-2"><a className="text-blue-700 hover:underline" href="#">delete</a></td>
        </tr>
    )
}

export default OutfitCard