import React, { Component } from 'react'

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
            <tr>
              <td className="border-t px-2 py-2">S</td>
              <td className="border-t px-2 py-2"><a href="#"><img className="inline-block mr-2 rounded-full" src="placeholders/pictures/male_avatar.svg" alt="" height="40" width="40"/> Nike Off White Sports Bra</a></td>
              <td className="border-t px-2 py-2">Light blue sports bra</td>
              <td className="border-t px-2 py-2">Sports</td>
              <td className="text-center border-t px-2 py-2"><a className="text-blue-700 hover:underline" href="#">edit</a></td>
            </tr>
          </tbody>
        </table>
      </div>
        )
    }
}