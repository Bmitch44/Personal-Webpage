import { React } from 'react';
import '../modals.css';

const ViewProject = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                View Projects Modal
            </div>
        </div>
    );
}

export default ViewProject;