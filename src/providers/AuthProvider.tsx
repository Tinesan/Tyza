import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const AuthContext = React.createContext<{
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}>({
  isAuth: false,
  setIsAuth: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const isAuthLocalStorage = window.localStorage.getItem("isAuth");
  const isAuthCommon = isAuth || !!isAuthLocalStorage;

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuthCommon,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
