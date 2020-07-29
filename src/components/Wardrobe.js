import React, { Component } from 'react'
import WardrobeCard from '../components/WardrobeCard'


export default class Wardrobe extends React.Component {

    render () {

        return (
            <div className="py-8 px-4">
        <h2 className="text-3xl mb-2 font-heading font-semibold">Your Wardrobe</h2>
        <div className="flex flex-wrap -mx-4 mb-8">
      
        </div>
      
        <table className="w-full table-auto">
          <thead>
            <tr><th className="border-t px-2 py-2" scope="col">Size</th><th className="border-t px-2 py-2" scope="col">Name</th><th className="border-t px-2 py-2" scope="col">Description</th><th className="border-t px-2 py-2" scope="col">Type</th>
            </tr></thead>
          <tbody>
            {this.props.clothes.map(item => <WardrobeCard
            key={item.id}
            {...item}
            handleSelectedItem={this.props.handleSelectedItem}
            deleteClothe={this.props.deleteClothe}
             />)}
            
          </tbody>
        </table>
      </div>
        )
    }
}