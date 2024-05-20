import React from 'react';
import DropdownMenuItem from './dropdownMenuItems/DropdownMenuItem';
import './Dropdown.css';

const Dropdown = ({ items }) => (
    <div className="dropdown">
        {items.map((item, index) => (
            <DropdownMenuItem
                key={index}
                header={item.header}
                subheader={item.subheader}
                link={item.link}
                logo={item.logo}
            />
        ))}
    </div>
);

export default Dropdown;