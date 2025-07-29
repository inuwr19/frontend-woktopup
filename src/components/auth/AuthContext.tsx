import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import axiosTest from "../../plugins/axios";

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
};

type User = {
  id: number;
  name: string;
  email: string;
  // Tambahkan properti lain sesuai data pengguna Anda
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    await axiosTest.post("/auth/logout", {}, { withCredentials: true });
    setUser(null); // Reset pengguna setelah logout
    localStorage.removeItem("user_id");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface AuthContextProps {
//   user: User | null;
//   loading: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axiosTest.get("/user", {
//           withCredentials: true,
//         });
//         setUser(response.data);
//       } catch {
//         setUser(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const login = async (email: string, password: string) => {
//     await axios.post(
//       "/auth/spa/login",
//       { email, password },
//       { withCredentials: true }
//     );
//     const response = await axiosTest.get("/user", { withCredentials: true });
//     setUser(response.data); // Update user state
//   };

//   const logout = async () => {
//     await axiosTest.post("/auth/logout", {}, { withCredentials: true });
//     setUser(null); // Clear user state
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
