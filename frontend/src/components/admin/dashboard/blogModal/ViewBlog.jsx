import { React } from 'react';
import '../modals.css';

const ViewBlog = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                View Blog Modal
            </div>
        </div>
        );
}

export default ViewBlog;