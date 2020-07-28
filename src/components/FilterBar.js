import React from "react";

export default class FilterBar extends React.Component {
  render() {
    return (
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="">
            Label for select
          </label>
          <div className="relative">
            <select
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              name="field-name"
            >
              <option>Sports</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Sneakers</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewbox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
