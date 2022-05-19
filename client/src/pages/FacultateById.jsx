import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axios_cu_cred } from "../utils/api";

function FacultateById({}) {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    authorities: [],
    profil: "",
    bac: "",
    scrisoare: "",
    rezumat: "",
    oras: "",
    locuri: "",
    examen: "",
    taxa: "",
    medie: "",
    link: "",
  });

  const getById = async (id) => {
    await axios_cu_cred.post("/api/test/getById", { id: id }).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  const aplica = async () => {
    await axios_cu_cred.post("/api/test/aplica", { id: id }).then(res => {
      console.log(res);
    })
  }

  useEffect(() => {
    getById(id);
  }, []);
  return (
    <div className="facul">
      <div className="header">
        <div
          className="elemfain"
          style={{ background: "url(" + user.profil + ")" }}
        ></div>
      </div>

      <div className="page">
        <div className="whiteSpace"></div>
        <div className="up_section">
          <div className="site">
            {user.link && (
              <a href={user.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffc300"
                >
                  <path d="M15.655 16.639c-.757.739-.736 1.936.04 2.604-.92 1.8-2.16 3.41-3.643 4.757-5.812.038-10.804-4.137-11.852-9.806 1.059-1.779 2.441-3.344 4.064-4.614.729.493 1.732.353 2.334-.328 3.835 1.292 7.046 3.947 9.057 7.387zm-15.108-8.233c-.396 1.265-.58 2.586-.542 3.941 1.001-1.398 2.195-2.646 3.575-3.722l-.02-.083c-1.033-.141-2.019-.181-3.013-.136zm23.012.365c-1.469-.964-3.099-1.702-4.841-2.162-.14.257-.354.467-.618.611.784 3.021.761 6.233-.072 9.248.859.659.901 1.94.078 2.701.305.881.539 1.788.702 2.713 4.323-2.984 6.095-8.288 4.751-13.111zm-8.333-2.696c-2.851-.128-5.655.471-8.186 1.745.019.135.019.242.013.348 4.208 1.432 7.593 4.373 9.662 7.955l.199-.015c.78-2.834.791-5.845.028-8.689-.802-.11-1.469-.662-1.716-1.344zm1.671-2.122c.917.044 1.708.679 1.936 1.476 1.426.358 2.796.892 4.086 1.59-1.559-3.412-4.668-5.965-8.428-6.76.962 1.138 1.767 2.378 2.406 3.694zm-15.91 3.274c.901-.016 1.787.032 2.713.156.523-1.073 1.92-1.375 2.788-.602 2.766-1.396 5.784-2 8.752-1.872.107-.254.282-.47.506-.632-.794-1.58-1.833-3.016-3.067-4.259-5.189-.289-9.752 2.738-11.692 7.209zm15.812 12.438c-.76 1.514-1.742 2.925-2.929 4.19 1.38-.216 2.682-.667 3.863-1.311-.148-.994-.384-1.96-.7-2.889l-.234.01z" />
                </svg>
                Site-ul facultatii
              </a>
            )}
          </div>
          <div className="email">
            {user.email && (
              <>
                <a href={`mailto:${user.email}`}>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#ffc300"
                  >
                    <path d="M24 23h-24v-13.275l2-1.455v-7.27h20v7.272l2 1.453v13.275zm-20-10.472v-9.528h16v9.527l-8 5.473-8-5.472zm14-.528h-12v-1h12v1zm0-3v1h-12v-1h12zm-7-1h-5v-3h5v3zm7 0h-6v-1h6v1zm0-2h-6v-1h6v1z" />
                  </svg>
                  {user.email}
                </a>
              </>
            )}
          </div>
          <div className="email">
            {user.oras && (
              <>
                <h4>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#ffc300"
                  >
                    <path d="M13 2h2v2h1v19h1v-15l6 3v12h1v1h-24v-1h1v-11h7v11h1v-19h1v-2h2v-2h1v2zm8 21v-2h-2v2h2zm-15 0v-2h-3v2h3zm8 0v-2h-3v2h3zm-2-4v-13h-1v13h1zm9 0v-1h-2v1h2zm-18 0v-2h-1v2h1zm4 0v-2h-1v2h1zm-2 0v-2h-1v2h1zm9 0v-13h-1v13h1zm7-2v-1h-2v1h2zm-18-1v-2h-1v2h1zm2 0v-2h-1v2h1zm2 0v-2h-1v2h1zm14-1v-1h-2v1h2zm0-2.139v-1h-2v1h2z" />
                  </svg>
                  {user.oras}
                </h4>
              </>
            )}
          </div>
          <div className="email">
            {user.locuri && (
              <>
                <h4>
                  <svg
                    fill="#ffc300"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
                  </svg>
                  {user.locuri}
                </h4>
              </>
            )}
          </div>{" "}
          <div className="email">
            {user.taxa && (
              <>
                <h4>
                  <svg
                    width="24"
                    fill="#ffc300"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M4.82 19.407c-2.966-1.857-4.94-5.153-4.94-8.907 0-5.795 4.705-10.5 10.5-10.5 3.605 0 6.789 1.821 8.68 4.593 2.966 1.857 4.94 5.153 4.94 8.907 0 5.795-4.705 10.5-10.5 10.5-3.599 0-6.778-1.815-8.67-4.579l-.01-.014zm8.68-15.407c5.243 0 9.5 4.257 9.5 9.5s-4.257 9.5-9.5 9.5-9.5-4.257-9.5-9.5 4.257-9.5 9.5-9.5zm.5 15h-1.021v-.871c-2.343-.302-2.599-2.179-2.599-2.744h1.091c.025.405.157 1.774 2.182 1.774.599 0 1.088-.141 1.453-.419.361-.276.536-.612.536-1.029 0-.793-.513-1.367-2.07-1.718-2.368-.536-2.923-1.398-2.923-2.533 0-1.509 1.223-2.216 2.33-2.406v-1.054h1.021v1.015c2.491.195 2.695 2.215 2.695 2.771h-1.098c0-1.161-.918-1.766-1.996-1.766-1.077 0-1.854.532-1.854 1.408 0 .781.439 1.165 1.994 1.554 1.879.473 2.999 1.101 2.999 2.681 0 1.744-1.509 2.393-2.74 2.493v.844zm2.85-15.453c-1.696-1.58-3.971-2.547-6.47-2.547-5.243 0-9.5 4.257-9.5 9.5 0 2.633 1.073 5.017 2.806 6.739l-.004-.01c-.44-1.159-.682-2.416-.682-3.729 0-5.795 4.705-10.5 10.5-10.5 1.171 0 2.298.192 3.35.547z" />
                  </svg>
                  {user.taxa}
                </h4>
              </>
            )}
          </div>
          <div style={{margin:20}} className="mainButton" onClick={aplica}>
            APLICA ACUM
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultateById;
