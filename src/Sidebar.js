import React from 'react';
import './Sidebar.css'
import { IoIosHome } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { FaTableCells } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";

const Sidebar = ({ setActivePage, openSidebarToggle, OpenSidebar }) => {
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className={`sidebar ${openSidebarToggle ? 'open' : ''}`}>
      <ul>
        <li onClick={() => handlePageChange('dashboard')}><IoIosHome className='iconside'/>
         Dashboard</li>
        <li onClick={() => handlePageChange('form')}> <FaWpforms  className='iconside'/>
        Form</li>
        <li onClick={() => handlePageChange('table')}><FaTableCells className='iconside' />

Table</li>
        <li onClick={() => handlePageChange('charts')}><FaRegChartBar className='iconside'/>
        Charts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
