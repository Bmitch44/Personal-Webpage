import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    const renderVideo = () => {
        if (!project.video) return null;

        if (project.video.includes('youtube.com') || project.video.includes('youtu.be')) {
            // Extract video ID from YouTube URL
            const videoId = project.video.split('v=')[1] || project.video.split('/').pop();
            return (
                <div className="video-container">
                    <h3>Demo Video</h3>
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        } else {
            // Fallback to regular video tag for non-YouTube videos
            return (
                <div className="video-container">
                    <h3>Demo Video</h3>
                    <video controls width="100%">
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            );
        }
    };

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
                {renderVideo()}
            </div>
        </div>
    );
};

export default ProjectModal;
