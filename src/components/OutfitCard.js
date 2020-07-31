import React from "react";

const OutfitCard = (props) => {
  const {
    name,
    id,
    category,
    weekday,
    handleSelectedOutfit,
    deleteOutfit,
  } = props;
  
  return (
    <tr>
      <td className="border-t px-2 py-2">
        <a href="#">
          <img
            className="inline-block mr-2 rounded-full"
            src="placeholders/pictures/male_avatar.svg"
            alt=""
            height="40"
            width="40"
          />
          {weekday}
        </a>
      </td>
      <td className="border-t px-2 py-2">{category}</td>
      <td onClick={() => handleSelectedOutfit(id)} className="border-t px-2 py-2">{name}</td>
      <td
        className="text-center border-t px-2 py-2"
      >
        <a 
        onClick={(event) => deleteOutfit(event, id)}
        className="text-blue-700 hover:underline" href="#">
          delete
        </a>
      </td>
    </tr>
  );
};

export default OutfitCard;
