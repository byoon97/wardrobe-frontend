import React from 'react'
import { render } from 'react-dom'

export default class Mannequin extends React.Component {
    state = {
        outfitArray : []
    }

    render() {
        return (
            <div> mannequin </div>
    // <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
    // <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
    //   <div className="py-12 px-4">
    //     <h2 className="text-4xl text-center mb-4 font-heading">OOTD</h2>
    //     <p className="max-w-2xl mb-8 mx-auto text-center text-gray-500 leading-relaxed">&lt;insert outfit description here&gt;</p>
    //     <div className="flex flex-wrap -mx-4 -mb-8">
    //       <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""/></div>
    //       <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/office.jpg" alt=""/></div>
    //       <div className="md:w-1/3 px-4 mb-8"><img className="rounded shadow-md" src="placeholders/pictures/work.jpg" alt=""/></div>
    //     </div>
    //   </div>
      
    //   <div className="py-12 px-4">
    //     <h2 className="text-3xl mb-8 text-center font-heading">Submit new Clothing</h2>
    //     <div className="w-full max-w-2xl mx-auto mb-12">
    //       <form>
    //         <div className="flex mb-4 -mx-2">
    //           <div className="w-1/2 px-2">
    //             <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Clothing Name"/>
    //           </div>
    //           <div className="w-1/2 px-2">
    //             <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Clothing Size"/>
    //           </div>
    //         </div>
    //         <div className="mb-4"><textarea className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write a Description" rows="5"></textarea></div>
    //         <div>
    //           <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">Submit</button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="flex flex-col lg:flex-row lg:justify-center -mx-4">
    //       <div className="px-4"><img className="inline-block w-8 h-8 pr-2" src="placeholders/icons/home.svg" alt="">
    //         <span>Flatiron School of Software Engineering</span>
    //       </div>
    //       <div className="px-4"><img className="inline-block w-8 h-8 pr-2" src="placeholders/icons/mobile.svg" alt="">
    //         <span></span>
    //       </div>
    //       <div className="px-4"><img className="inline-block w-8 h-8 pr-2" src="placeholders/icons/message.svg" alt="">
    //         <span>By Christa and Brandon</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
        )
    }
}