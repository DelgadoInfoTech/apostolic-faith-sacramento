import React from "react";
import { useState } from "react";
import DropdownMenu from '@/components/DropdownMenu';


export default function Dropdown() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const menuItems = ["events", "contact"]
    
    return (   
        <div
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <button>Dropdown Menu</button>
                {/* <DropdownMenu /> */}
                {isDropdownVisible && <DropdownMenu menuItems={menuItems}/>}
        </div>
  );
}
