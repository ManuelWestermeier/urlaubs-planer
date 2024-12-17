import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";

/**
 * Default context value to avoid null errors.
 * Provides placeholder methods to satisfy the context consumers.
 */
const AuthContext = createContext({
  user: "",
  password: "",
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

/**
 * Custom hook to access the authentication context.
 * @returns The authentication context.
 */
export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider component to manage user authentication and persistence.
 * @param {{ children: React.ReactNode }} props
 * @returns {React.ReactNode}
 */
export const AuthProvider = ({ children }) => {
  // Persist authentication state in local storage
  const [auth, setAuth] = useLocalStorage("app_auth_secret", {
    user: "",
    password: "",
  });

  // Check if the user is authenticated
  const isAuthenticated = !!auth.user && !!auth.password;

  useEffect(() => {}, [auth]);

  /**
   * Login function to store credentials in local storage.
   * @param {string} user - Username.
   * @param {string} password - Password.
   */
  const login = (user, password) => {
    setAuth({ user, password });
  };

  /**
   * Logout function to clear stored credentials.
   */
  const logout = () => {
    setAuth({ user: "", password: "" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: auth.user,
        password: auth.password,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
