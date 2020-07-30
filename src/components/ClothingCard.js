import React from "react";

export default (props) => {
  const { name, image, size, category } = props
  console.log(props)
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-1/2 px-4 mb-4 lg:mb-0">
          <img
            className="rounded shadow-md"
            src={image}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 px-4">
          <h2 className="text-4xl mb-4 font-heading">{name}</h2>
          <p className="mb-6 text-gray-500 leading-relaxed">
            Category: {category}
          </p>
          <p className="mb-6 text-gray-500 leading-relaxed">
            Size: {size}
          </p>
          <div className="flex mb-6">
            <span className="text-2xl"></span>
            <div className="flex flex-wrap ml-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
