import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axios_cu_cred } from "../utils/api";

function Navbar({ logged, setLogged, setUser, user }) {
  const [role, setRole] = useState("");

  const iafrt = async () => {
    if (logged)
      await axios_cu_cred.get("/api/test/userInfo").then((res) => {
        setRole(res.data.roles[0].name);
      });
  };

  useEffect(() => {
    const a = async () => {
      await axios_cu_cred.get("/api/test/isLogged").then((res) => {
        if (res.data) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      });
    };

    iafrt();
    a();
  }, [logged]);

  const logout = async () => {
    await axios_cu_cred.post("/api/auth/signout").then((res) => {
      if (res.data) {
        setLogged(false);
        setUser();
      }
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/" style={{ fontWeight: 900 }}>
          <h1 className="navlogo logo">College_Picker</h1>
        </a>
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="menu-icon__line"></span>
      </label>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to={{ pathname: "/", hash: "#about" }}>About</Link>
        </li>

        <li className="nav-link">
          <a href="/facultati">Facultati</a>
        </li>
        {logged ? (
          <>
            <li className="nav-link">
              <Link
                to={role == "ROLE_MODERATOR" ? "/facultatePage" : "/userPage"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g>
                    <path d="M0,0h24v24H0V0z" />
                  </g>
                  <g>
                    <g>
                      <path
                        fill="#ffc300"
                        d="M4,18v-0.65c0-0.34,0.16-0.66,0.41-0.81C6.1,15.53,8.03,15,10,15c0.03,0,0.05,0,0.08,0.01c0.1-0.7,0.3-1.37,0.59-1.98 C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26c-0.42-0.6-0.75-1.28-0.97-2H4z"
                      />
                      <path
                        fill="#ffc300"
                        d="M10,12c2.21,0,4-1.79,4-4s-1.79-4-4-4C7.79,4,6,5.79,6,8S7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2s-0.9,2-2,2 c-1.1,0-2-0.9-2-2S8.9,6,10,6z"
                      />
                      <path
                        fill="#ffc300"
                        d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z"
                      />
                    </g>
                  </g>
                </svg>{" "}
                {user.username}
              </Link>
            </li>
            <li className="nav-link" onClick={logout}>
              <h3>Logout</h3>
            </li>
          </>
        ) : (
          <>
            <li className="nav-link">
              <a href="/register">??nregistreaz??-te</a>
            </li>
            <li className="nav-link">
              <a href="/login">Intr?? ??n cont</a>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Navbar;
