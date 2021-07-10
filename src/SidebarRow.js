import React from 'react';
import './SidebarRow.css';

function SidebarRow({ selected ,title, Icon}) {
    return (
        <div className={`sidebarRow  ${selected && "selected"}`}>
            <Icon  className= "sidebarRow_icons"  /> 
            <h3 className="sidebarRow_title">{title}</h3>
        </div>
    )
}

export default SidebarRow
