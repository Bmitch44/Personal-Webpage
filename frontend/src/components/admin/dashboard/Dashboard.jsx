import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { logout, checkSession } from '../../../services/adminService';
import ViewProject from './projectModal/ViewProject';
import AddProject from './projectModal/AddProject';
import ViewBlog from './blogModal/ViewBlog';
import AddBlog from './blogModal/AddBlog';

import './Dashboard.css';

const Dashboard = () => {
    console.log('Dashboard component');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [cookies] = useCookies(['sessionId']);
    const [modalType, setModalType] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setModalType(null);
        setShowModal(false);
    }

    const handleModal = (type) => {
        setModalType(type);
        setShowModal(true);
    }

    const renderModal = (type) => {
        console.log('Rendering modal');
        console.log(type);
        switch (type) {
            case 'viewProject':
                return <ViewProject show={showModal} onClose={closeModal} />;
            case 'addProject':
                return <AddProject show={showModal} onClose={closeModal} />;
            case 'viewBlog':
                return <ViewBlog show={showModal} onClose={closeModal} />;
            case 'addBlog':
                return <AddBlog show={showModal} onClose={closeModal} />;
            default:
                return null;
        }
    }

    useEffect(() => {
        const checkSessionValidity = async () => {
            console.log('Checking session validity');
            if (cookies.sessionId === "undefined" || !cookies.sessionId) {
                console.log('No session ID found');
                navigate('/admin');
            }
            console.log('Session ID found');
            const isValid = await checkSession(cookies.sessionId);
            if (!isValid) {
                navigate('/admin');
            } else {
                setIsLoading(false);
            }
        };

        checkSessionValidity();
    }, [cookies.sessionId]);

    useEffect(() => {
        return async () => {
            await logout();
        };
    }, []);

    const handleLogout = async () => {
        await logout();
        navigate('/admin');
    }

    if (isLoading) {
        return <div>Loading...</div>; // Or a loading spinner
    }

    return (
        <div className='dashboard-container'>
            <div className='header'>
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='content'>
                <div className='section-card'>
                    <button onClick={() => handleModal('addProject')}>Add Project</button>
                    <button onClick={() => handleModal('viewProject')}>View Projects</button>
                </div>
                <div className='section-card'>
                    <button onClick={() => handleModal('addBlog')}>Add Blog</button>
                    <button onClick={() => handleModal('viewBlog')}>View Blogs</button>
                </div>
            </div>
            {renderModal(modalType)}
        </div>
    );
}

export default Dashboard;