import React from 'react'
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io';

const DropDown = ({children}) => {
    return (
    <div className="relative inline-block dropdown justify-self-center group ">
      <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-700 dark:hover:bg-gray-700 dark:text-white bg-transparent rounded ">
        <b>{children}<IoIosArrowForward className='text-xs inline transform transition-all group-hover:rotate-90'></IoIosArrowForward></b>
      </button>
      <ul className="absolute hidden bg-white dark:bg-gray-400 dropdown-content w-96 text-center rounded-lg -right-0">
      <li className="dropdown block py-4 whitespace-no-wrap bg-white dark:bg-gray-400 hover:bg-gray-400 dark:hover:bg-gray-700 rounded-t-lg border-b">
      <IoIosArrowDown className='text-xs  inline transform transition-all group-hover:rotate-90'></IoIosArrowDown> Mis cuentas
                <ul className="absolute hidden bg-white dropdown-subcontent dark:bg-gray-400 dark:hover:bg-gray-700 right-full w-96 mr-2 rounded-lg text-center top-0"> 
                    <li className=" block py-4 whitespace-no-wrap bg-white dark:bg-gray-400 hover:bg-gray-400 dark:hover:bg-gray-700 w-full  rounded-t-lg border-b">Sesame1 Kelly Pierce</li>
                    <li className="block py-4 whitespace-no-wrap bg-white dark:bg-gray-400 dark:hover:bg-gray-700  hover:bg-gray-400 rounded-b-lg">Sesame2 Kelly Pierce</li>
                </ul>
      </li>
      <li><a className="block py-4 whitespace-no-wrap bg-white  dark:bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-400 border-b" href="#">Mi perfil</a></li>
        <li><a className="block  py-4 whitespace-no-wrap bg-white dark:bg-gray-400 dark:hover:bg-gray-700  hover:bg-gray-400 rounded-b-lg" href="#">Vista empleado</a></li>
           
      </ul>
    </div>
    )
}

export default DropDown;