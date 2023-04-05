//======================================= import react settings ====================================
import { useState, createContext, useContext, useEffect } from "react";
import { useNavigate, Link  } from "react-router-dom";

//=========================== import utils ====================================
import { isAuthenticated } from '../utils/Auth/AuthService';

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let cuser = isAuthenticated();
      
      if (cuser === null) {
        localStorage.setItem('userLogged', '');
        cuser = '';
      }else{
        const storeData = JSON.parse(localStorage.getItem('userLogged'));
        if(storeData) {
          if(new Date(storeData.expiration) > new Date()) {
            setCurrentUser(cuser);
          }else {
            localStorage.removeItem('userLogged');
            alert("Your session is expire.!!!");
            navigate('/signIn');
          }
        }

      }
    };
    checkLoggedIn();
  }, []);

  //console.log('usercontext', currentUser);

  return (
    <AuthContext.Provider value={[currentUser, setCurrentUser]}>
      { currentUser?.userData ? children : navigate('/signIn')}
    </AuthContext.Provider>
  );
};