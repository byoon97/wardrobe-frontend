import React from "react";

const WardrobeCard = (props) => {
  const {
    name,
    id,
    image,
    size,
    category,
    handleSelectedItem,
    handleWardrobeClick,
    deleteClothe,
  } = props;

  return (
    <tr onClick={() => handleSelectedItem(id)}>
      <td className="border-t px-2 py-2">{size}</td>
      <td className="border-t px-2 py-2">
        <a href="#">
          <img
            className="inline-block mr-2 rounded-full"
            src="placeholders/pictures/male_avatar.svg"
            alt=""
            height="40"
            width="40"
          />
          {name}
        </a>
      </td>
      <td className="border-t px-2 py-2">
        <img src={image} />
      </td>
      <td className="border-t px-2 py-2">{category}</td>
      <td
        className="text-center border-t px-2 py-2"
        onClick={() => handleWardrobeClick(id)}
      >
        <a className="text-blue-700 hover:underline" href="#">
          Add to New Outfit
        </a>
      </td>
      <td
        onClick={() => deleteClothe(id)}
        className="text-center border-t px-2 py-2"
      >
        <a className="text-blue-700 hover:underline" href="#">
          delete
        </a>
      </td>
    </tr>
  );
};

export default WardrobeCard;
