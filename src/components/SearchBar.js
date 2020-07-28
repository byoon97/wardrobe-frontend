import React from 'react'

export default class SearchBar extends React.Component {
    state = {
        search : ""
    }

    render() {
        return (
            <nav className="flex flex-wrap items-center justify-between p-4"><div className="flex flex-shrink-0"><a className="text-xl text-indigo-500 font-semibold" href="#">Outfit Planner</a></div>
                <div className="block lg:hidden">
                    <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>
                </div>
                <div className="navbar-menu hidden lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
                    <div className="ml-auto"><a className="block lg:inline-block mt-4 lg:mt-0 lg:mr-8 text-blue-900 hover:text-blue-700" href="#">Sign in</a><a className="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="#">Sign up</a></div>
                    </div>
            </nav>
        )
    }
}