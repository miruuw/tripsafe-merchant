// import React, { createContext, useContext, useState } from 'react';

// const LoginContext = createContext();

// const LoginProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profile, setProfile] = useState({});

//   return (
//     <LoginContext.Provider
//       value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
//     >
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export const useLogin = () => useContext(LoginContext);

// export default LoginProvider;
import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    ownerName: '',
    email: '',
    avatar: '',
    businessName: '',
    businessDescription: '',
    phoneNumber: '',
    whatsappNumber: '',
    address: '',
    location: '',
    ownerIDImage: '',
  });

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;

