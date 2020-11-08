import React, { ReactNode, useState } from "react";

import { AuthenticateDataFragment } from "generated/graphql";

type Props = {
  children: ReactNode;
};

export const AuthContext = React.createContext<{
  authData?: AuthenticateDataFragment;
  setAuthData: (authData: AuthenticateDataFragment) => void;
}>({
  authData: undefined,
  setAuthData: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const [authData, setAuthData] = useState<
    AuthenticateDataFragment | undefined
  >(undefined);

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
