import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDelete} from '../Customhook/UseDelete';

const EditDelete = ({url,item,className}) => {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { deleteItem } = useDelete(); // Destructure from hook

  // Reference to the dropdown to handle clicking outside of it
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicked outside
  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Use effect to detect clicks outside the dropdown
  React.useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [deleteItem]);

  const handleDelete = (itemId) => {
    // console.log("dekete",itemId)
 deleteItem(itemId,url);
  };
  

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        type="button"
        className="size-10 rounded-full bg-gray-200"
      >
        {/* Icon for dropdown */}:
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* Edit Option */}
            <h1
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                navigate(`/admin/${url}/${item?._id}`, { state: item});
              }}
            >
              Edit
            </h1>
            {/* Delete Option */}
            <Link
              to="/admin"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleDelete(item?._id)}
            >
              Delete
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDelete;
