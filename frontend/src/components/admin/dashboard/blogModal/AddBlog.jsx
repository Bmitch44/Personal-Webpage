import { React } from 'react';
import '../modals.css';

const AddBlog = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                Add Blog Modal
            </div>
        </div>
    );
}

export default AddBlog;