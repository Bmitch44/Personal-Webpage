import { React } from 'react';
import '../modals.css';

const AddProject = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                Add Project Modal
            </div>
        </div>
    );
}

export default AddProject;