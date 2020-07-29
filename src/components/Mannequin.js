import React from 'react'
import { render } from 'react-dom'

export default class Mannequin extends React.Component {
    render() {
        return (       
    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
      <div className="py-12 px-4">
        <h2 className="text-4xl text-center mb-4 font-heading">OOTD</h2>
        <p className="max-w-2xl mb-8 mx-auto text-center text-gray-500 leading-relaxed">Name: {this.props.name}</p>
        <p className="max-w-2xl mb-8 mx-auto text-center text-gray-500 leading-relaxed">Category: {this.props.category}</p>
        <p className="max-w-2xl mb-8 mx-auto text-center text-gray-500 leading-relaxed">{this.props.weekday}</p>
        <div className="flex flex-wrap -mx-4 -mb-8">
            {this.props.clothes.map(item => 
            <div className="md:w-1/3 px-4 mb-8">Item: {item.name} Size: {item.size}
              <img className="rounded shadow-md" src={item.image} alt=""/>
            </div>
              )}
        </div>
      </div>
    </div>
    </div>
        )
    }
}