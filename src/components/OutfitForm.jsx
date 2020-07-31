import React from "react";
import OutfitFormCard from "./OutfitFormCard";

export default class OutfitForm extends React.Component {
  state = {
    name: "",
    category: "",
    user: "",
    weekday: "",
    clothes: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/outfits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...this.state,
        clothes: this.props.newOutfit,
      }),
    })
      .then((res) => res.json())
      .then(data => {
        this.props.handleNewOutfit(data);
        this.setState({
          name: "",
          category: "",
          weekday: "",
          clothes: [],
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellSpacing="0">
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
                <th className="text-middle">Remove</th>
              </tr>
            </thead>
            <tbody id="form-body">
              {this.props.newOutfit.map((item) => (
                <OutfitFormCard key={item.id} {...item} />
              ))}
            </tbody>
          </table>
          <div className="w-full max-w-2xl py-4 mx-auto mb-12">
            <div className="mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Day"
                name="weekday"
                value={this.state.weekday}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Category"
                name="category"
                value={this.state.category}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                type="text"
                placeholder="Outfit Description"
                name="name"
                value={this.state.name}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <button
            className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
            onClick={(e) => this.handleSubmit(e)}
          >
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
