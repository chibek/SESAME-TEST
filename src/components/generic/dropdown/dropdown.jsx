import React from 'react'

const DropDown = () => {
    return (
    <div className="relative inline-block dropdown">
      <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 bg-gray-300 rounded">
        <span>Dropdown 🠋</span>
      </button>
      <ul className="absolute hidden pt-1 text-gray-700 dropdown-content">
      <li><a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-t hover:bg-gray-400" href="#">Option 1</a></li>
        <li><a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">Option 2</a></li>
            <li className="dropdown">
              <a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">Option 3 🠞</a>
                <ul className="absolute hidden pl-5 ml-24 -mt-10 text-gray-700 dropdown-content">
                <li><a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">Option 3-1</a></li>
                    <li><a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">Option 3-2</a></li>
                </ul>
            </li>
        <li><a className="block px-4 py-2 whitespace-no-wrap bg-gray-200 rounded-b hover:bg-gray-400" href="#">Option 4</a></li>
      </ul>
    </div>
    )
}

export default DropDown;