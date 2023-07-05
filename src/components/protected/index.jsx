import { Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

function Protected({children}) {
    const {isUserLogued} = useUser(); 

    if(!isUserLogued()){
        return <Navigate to='/login' replace />
    }
    
    return children;
}

export default Protected