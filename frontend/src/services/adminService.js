import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const login = async (email, password) => {
    const createAdmin = await axios.post(`${API_URL}/admin-create/`);
    if (createAdmin.status === 200) {
        console.log('Admin created successfully');
    }
    const loginAdmin = await axios.post(`${API_URL}/admin-login/`, {email, password});
    if (loginAdmin.status === 200) {
        console.log('Admin logged in successfully');
    }
    return loginAdmin.data[0];
}

export const logout = async () => {
    const logoutAdmin = await axios.get(`${API_URL}/admin-logout/`);
    if (logoutAdmin.status === 200) {
        console.log('Admin logged out successfully');
    }
    return logoutAdmin.data;
}

export const checkSession = async (sessionId) => {
    console.log('Checking session');
    console.log(sessionId);
    const checkSession = await axios.post(`${API_URL}/check-session/`, {session_id: sessionId});
    if (checkSession.status === 200) {
        return true;
    } else {
        return false;
    }
}