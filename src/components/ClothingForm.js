import React from "react";

export default class ClothingForm extends React.Component {
    state = {
        name: '',
        size: '',
        category: '',
        image: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/clothes', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                "Accept": "application/json"
            }, body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            this.props.handleNewClothes(data)
            this.setState( {
                name: '',
                size: '',
                category: '',
                image: ''
            } )
        })
    }

    handleChange = (event) => {
        this.setState( {[event.target.name]: event.target.value } )
    }

  render() {
    return (
      <section className="py-12 px-4">
        <h2 className="text-3xl mb-8 text-center font-heading">
          Submit new Clothing
        </h2>
        <div className="w-full max-w-2xl mx-auto mb-12">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="text"
                  placeholder="Clothing Name"
                  name="name"
                  value={this.state.name}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="text"
                  placeholder="Clothing Size"
                  name="size"
                  value={this.state.size}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="text"
                  placeholder="Clothing Category"
                  name="category"
                  value={this.state.category}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Image Link"
                name="image"
                value={this.state.image}
                onChange={(event) => this.handleChange(event)}
              ></input>
            </div>
            <div>
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
