/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const UserContext = createContext(null);

export default function UserConextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
