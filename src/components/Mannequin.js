import React from 'react'
import { render } from 'react-dom'

export default class Mannequin extends React.Component {
    state = {
        outfitArray : []
    }

    render() {
        return (        
    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
    <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
      <div className="py-12 px-4">
        <h2 className="text-4xl text-center mb-4 font-heading">OOTD</h2>
        <p className="max-w-2xl mb-8 mx-auto text-center text-gray-500 leading-relaxed">&lt;insert outfit description here&gt;</p>
        <div className="flex flex-wrap -mx-4 -mb-8">
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/office.jpg" alt=""/></div>
          <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""/></div>
        </div>
      </div>
      
    </div>
    </div>
        )
    }
}