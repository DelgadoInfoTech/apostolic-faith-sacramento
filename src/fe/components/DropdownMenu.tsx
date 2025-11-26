import React from "react";
import { useState } from "react";



export default function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = props.menuItems
  return (
    <ul className="flex flex-col absolute bg-stone-200 pr-10 pl-2">
        {menuItems.map((menuItem) => (
            <li>
                {menuItem}
            </li>
        ))
        }
    </ul>
  );
}