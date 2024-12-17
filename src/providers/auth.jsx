import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import getUrl from "../utils/get-url";

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
  const [auth, setAuth] = useLocalStorage("urlaubs-planer-auth", {
    user: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "urlaubs-planer-is-auth",
    false
  );

  useEffect(() => {
    if (!!auth.user && !!auth.password) {
      fetch(getUrl("/auth/login", auth))
        .then((res) => res.json())
        .then((data) => {
          setIsAuthenticated(data.auth && !data.error);
        });
    } else setIsAuthenticated(false);
  }, [auth]);

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
