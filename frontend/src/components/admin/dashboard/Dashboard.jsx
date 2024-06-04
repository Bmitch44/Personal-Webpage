import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/adminService';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/admin');
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;