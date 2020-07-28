import React from "react";

export default () => {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="lg:w-1/2 px-4 mb-4 lg:mb-0">
          <img
            className="rounded shadow-md"
            src="placeholders/pictures/paper.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 px-4">
          <h2 className="text-4xl mb-4 font-heading">&lt;clothing name&gt;</h2>
          <p className="mb-6 text-gray-500 leading-relaxed">
            &lt;clothing description&gt;
          </p>
          <p className="mb-6 text-gray-500 leading-relaxed">
            &lt;clothing size&gt;
          </p>
          <div className="mb-6">
            <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-400 rounded-full"></button>
            <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-300 rounded-full"></button>
            <button className="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-200 rounded-full"></button>
          </div>
          <div className="flex mb-6">
            <span className="text-2xl"></span>
            <div className="flex flex-wrap ml-4"></div>
          </div>
          <div className="pt-4 border-t">
            <a className="text-blue-700 hover:underline" href="#">
              Add to favorites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
