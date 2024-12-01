import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Custom hook for deleting an item.
 * @param {string} itemId - The ID of the item to delete.
 * @param {string} url - The base URL or endpoint for deletion.
 * @param {function} onSuccessCallback - Optional callback to run on successful delete.
 * @returns {object} - The deletion status and any error message.
 */
const useDelete = (itemId, url, onSuccessCallback) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      // If deletion is successful, run the success callback if provided
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }
  }, [isDeleted, onSuccessCallback]);

  const deleteItem = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await axios.delete(`http://localhost:8080/${url}/${itemId}`);
      if (response.status === 200) {
        setIsDeleted(true);
        toast.success('Item deleted successfully!');
      } else {
        setError('Failed to delete item');
        toast.error('Failed to delete item!');
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
      toast.error('An error occurred while deleting the item!');
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteItem, isDeleting, error, isDeleted };
};

export default useDelete;
