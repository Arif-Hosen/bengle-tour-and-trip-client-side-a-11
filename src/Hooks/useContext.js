import { useContext } from 'react';
import { AuthContext } from '../Context/authProvider';




// Context in a function
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;