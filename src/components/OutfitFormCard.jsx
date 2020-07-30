import React from "react";

export default (props) => {
  const { name, image, size, category } = props;

  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={image} className="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <span className="text-md lg:text-base font-medium element-qty">
            {name}
          </span>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">{size}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">{category}</span>
      </td>
    </tr>
  );
};
