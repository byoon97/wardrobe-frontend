import React from "react";

export default class FilterBar extends React.Component {
  state = {
    size: ''
  }

  handleChange = e => {
    if (e.target.value === "Please select a Size") {
      this.setState( {size: ''}, () => {
        this.props.handleFilter(this.state.size)
      } )
      
    } else if (e.target.value !== "Please select a Size") {
      this.setState({ [e.target.name]: e.target.value}, () => {
        this.props.handleFilter(this.state.size)
      })
    }
  }

  render() {
    return (
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Please Select a Size
          </label>
          <div className="relative">
            <select
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              name="size"
              onChange={(e) => this.handleChange(e)}
              value={this.state.size}
            >
              <option>Please select a Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
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
