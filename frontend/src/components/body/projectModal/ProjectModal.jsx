import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h2 className='title'>{project.title}</h2>
                <p className='text'>{project.description}</p>
                <p className='text'>{project.details}</p>
                <p className='text'>{project.expanded}</p>
                <div className='tools'>
                    <p><strong>Tools:</strong></p>
                    <p><i>{project.tools}</i></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
