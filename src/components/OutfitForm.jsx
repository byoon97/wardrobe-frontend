import React from "react";
import OutfitFormCard from "./OutfitFormCard";

export default class OutfitForm extends React.Component {
  state = {
    day: "",
    category: "",
    description: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/outfit_clothes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.handleNewOutfit(data);
        this.setState({
          day: "",
          category: "",
          description: "",
        });
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="text-middle">Image</th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span className="lg:hidden" title="Name">
                    Name
                  </span>
                  <span className="hidden lg:inline text-middle">Name</span>
                </th>
                <th className="hidden text-middle md:table-cell">Size</th>
                <th className="text-middle">Category</th>
              </tr>
            </thead>
            <tbody id="form-body">
              {this.props.newOutfit.map((item) => (
                <OutfitFormCard key={item.id} {...item} />
              ))}
            </tbody>
          </table>
          <div className="w-full max-w-2xl mx-auto mb-12">
            <div className="w-1/2 px-2 py-2">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Day"
                name="day"
                value={this.state.day}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="w-1/2 px-2 py-2">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Category"
                name="category"
                value={this.state.category}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="w-1/2 px-2 py-2">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Description"
                name="description"
                value={this.state.description}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <button
            className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            onClick={(e) => this.handleSubmit(e)}
          >
            <path
              fill="currentColor"
              d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
            />
            <span className="ml-2 mt-5px">Create Outfit</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center -mx-4">
          <div className="px-4">
            <img
              className="inline-block w-8 h-8 pr-2"
              src="placeholders/icons/home.svg"
              alt=""
            />
            <span>Flatiron School of Software Engineering</span>
          </div>
          <div className="px-4">
            <img
              className="inline-block w-8 h-8 pr-2"
              src="placeholders/icons/mobile.svg"
              alt=""
            />
            <span></span>
          </div>
          <div className="px-4">
            <img
              className="inline-block w-8 h-8 pr-2"
              src="placeholders/icons/message.svg"
              alt=""
            />
            <span>By Christa and Brandon</span>
          </div>
        </div>
      </>
    );
  }
}
