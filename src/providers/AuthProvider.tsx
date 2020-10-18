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
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
