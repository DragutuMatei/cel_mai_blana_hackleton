import { CookiesProvider } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Facultati from "./pages/Facultati";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";
import "./assets/scss/main.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Up from "./components/Up";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import { axios_cu_cred } from "./utils/api";
import FacultaPage from "./pages/FacultaPage";
import FacultateById from "./pages/FacultateById";

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    roles: [],
  });

  const elogged = async () => {
    await axios_cu_cred.get("/api/test/isLogged").then((res) => {
      // console.log(res.data);
      if (res.data) {
        setLogged(true);
        // console.log("esti logat");
      } else {
        setLogged(false);
        // console.log("nu esti logat");
      }
    });
  };

  const iafrt = async () => {
        await axios_cu_cred.get("/api/test/userInfo").then((res) => {
          setUser(res.data);
          // console.log("raeofilafkjadbfaksdbjk")
    });

  }

  useEffect(() => {
    // elogged()
    iafrt();
    // console.log(user)
  }, []);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Navbar
          user={user}
          logged={logged}
          setUser={() => {
            setUser({
              id: "",
              username: "",
              email: "",
              roles: [],
            });
          }}
          setLogged={(log) => setLogged(log)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facultati" element={<Facultati />} />
          <Route path="/userPage" 
          logged={logged}
          element={<UserPage />} />
          <Route path="/facultatePage"
          logged={logged}
          element={<FacultaPage />} />
          <Route
            path="/login"
            element={
              <Login
                logged={logged}
                user={user}
                setUser={(use) => {
                  setUser({
                    id: use.id,
                    username: use.username,
                    email: use.email,
                    roles: use.roles,
                  });
                }}
                setLogged={(log) => setLogged(log)}
              />
            }
          />

          <Route path="/register" element={<Register logged={logged} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facultatea/:id" element={<FacultateById />} />
        </Routes>

        <Up />
        <Footer />
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
