import React, { useState } from "react";
import { axios_cu_cred } from "../utils/api";

import { Navigate } from "react-router-dom";

function Register({ logged }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [role, setRole] = useState("");

  const register = async () => {
    console.log("er");
    if (password.length < 6) {
      alert("Parola prea mica");
      return;
    }
    await axios_cu_cred
      .post("/api/auth/signup", {
        username: username,
        email: email,
        password: password,
        role: [role],
      })
      .then((res) => {
        if (res.data.message == "User registered successfully!") {
          setRedirect(true);
        }
        console.log(res);
      });
  };

  return (
    <div className="login">
      {redirect && <Navigate to="/login" />}
      {logged && <Navigate to="/" />}

      <div className="leftLog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="941.40412"
          height="435.42027"
          viewBox="0 0 941.40412 435.42027"
        >
          <title>online_test</title>
          <path
            d="M213.79147,646.81347l-1.26717-.475c-.27846-.10493-27.99252-10.72312-40.975-34.79939-12.983-24.07742-6.62584-53.06672-6.56012-53.35613l.29921-1.32021,1.26659.475c.27846.10493,27.99194,10.72312,40.975,34.79939,12.983,24.07742,6.62585,53.06672,6.56012,53.35613Zm-40.16325-36.39516c10.97621,20.35661,32.87672,30.79147,38.42564,33.17362,1.055-5.94729,4.36362-29.99705-6.60278-50.33406-10.96525-20.33472-32.87441-30.78572-38.42564-33.17363C165.96985,566.035,162.6624,590.08244,173.62822,610.41831Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <path
            d="M181.47093,603.09347c23.33121,14.03683,32.3168,41.91784,32.3168,41.91784s-28.84178,5.12282-52.173-8.914-32.3168-41.91784-32.3168-41.91784S158.13972,589.05664,181.47093,603.09347Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#d0cde1"
          />
          <path
            d="M928.14845,237.65218H667.97885v-5.36232h-117.971v5.36232H288.76576a17.59851,17.59851,0,0,0-17.59851,17.59852V611.50288a17.59856,17.59856,0,0,0,17.59851,17.59858H928.14845A17.59856,17.59856,0,0,0,945.747,611.50288V255.2507A17.5985,17.5985,0,0,0,928.14845,237.65218Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <rect
            x="165.46352"
            y="36.46377"
            width="627.3913"
            height="353.91304"
            fill="#ffd60a"
          />
          <circle cx="478.62294" cy="20.37681" r="6.43478" fill="#ffd60a" />
          <path
            d="M886.1358,313.7967h-29.74V284.05675h29.74Zm-28.44691-1.293h27.15387V285.34979H857.68889Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <path
            d="M963.36275,616.23188H902.13344v-4.41154a.87468.87468,0,0,0-.87471-.8747H880.26582a.87468.87468,0,0,0-.8747.8747v4.41154H866.27055v-4.41154a.87468.87468,0,0,0-.8747-.8747H844.40294a.87468.87468,0,0,0-.87471.8747v4.41154H830.40767v-4.41154a.87468.87468,0,0,0-.87471-.8747H808.54a.87468.87468,0,0,0-.8747.8747v4.41154H794.54478v-4.41154a.87468.87468,0,0,0-.8747-.8747H772.67717a.87468.87468,0,0,0-.8747.8747v4.41154H758.6819v-4.41154a.87468.87468,0,0,0-.87471-.8747h-20.9929a.87468.87468,0,0,0-.87471.8747v4.41154H722.819v-4.41154a.87467.87467,0,0,0-.8747-.8747H700.9514a.87468.87468,0,0,0-.8747.8747v4.41154H686.95613v-4.41154a.87468.87468,0,0,0-.8747-.8747H521.637a.87468.87468,0,0,0-.8747.8747v4.41154H507.64171v-4.41154a.87468.87468,0,0,0-.8747-.8747H485.7741a.87468.87468,0,0,0-.87471.8747v4.41154H471.77883v-4.41154a.87468.87468,0,0,0-.87471-.8747H449.91121a.87468.87468,0,0,0-.8747.8747v4.41154H435.91594v-4.41154a.87468.87468,0,0,0-.8747-.8747H414.04833a.87468.87468,0,0,0-.87471.8747v4.41154H400.05306v-4.41154a.87468.87468,0,0,0-.87471-.8747H378.18544a.87468.87468,0,0,0-.8747.8747v4.41154H364.19017v-4.41154a.87468.87468,0,0,0-.8747-.8747H342.32256a.87468.87468,0,0,0-.8747.8747v4.41154H328.32729v-4.41154a.87468.87468,0,0,0-.87471-.8747h-20.9929a.87468.87468,0,0,0-.87471.8747v4.41154h-40.2364a20.99291,20.99291,0,0,0-20.99291,20.9929v9.4925a20.99291,20.99291,0,0,0,20.99291,20.99286H963.36275a20.99292,20.99292,0,0,0,20.99291-20.99286v-9.4925A20.99292,20.99292,0,0,0,963.36275,616.23188Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <rect
            x="28.71132"
            y="413.88349"
            width="912.69281"
            height="2.78529"
            fill="#3f3d56"
          />
          <path
            d="M883.36954,465.96058h-202v-115h202Zm-200-2h198v-111h-198Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <path
            d="M513.36954,488.96058h-180v-112h180Zm-178-2h176v-108h-176Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <path
            d="M417.46378,445.96058l-.17236-2.23633c-.51563-4.64356,1.03223-9.71777,5.332-14.87695,3.87012-4.5586,6.02-7.91211,6.02-11.78223,0-4.38574-2.75195-7.30957-8.16992-7.39551a15.28045,15.28045,0,0,0-8.686,2.666l-2.064-5.418c2.83838-2.06445,7.74023-3.44043,12.29785-3.44043,9.89014,0,14.36182,6.10644,14.36182,12.6416,0,5.84863-3.26807,10.0625-7.396,14.96387-3.78369,4.47168-5.15967,8.25586-4.90186,12.6416l.08594,2.23633Zm-1.89209,12.04a5.08415,5.08415,0,0,1,5.15967-5.418c3.01025,0,5.07422,2.23535,5.07422,5.418a5.12129,5.12129,0,1,1-10.23389,0Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#d0cde1"
          />
          <path
            d="M776.46378,420.96058l-.17236-2.23633c-.51563-4.64356,1.03223-9.71777,5.332-14.87695,3.87012-4.5586,6.02-7.91211,6.02-11.78223,0-4.38574-2.75195-7.30957-8.16992-7.39551a15.28045,15.28045,0,0,0-8.686,2.666l-2.064-5.418c2.83838-2.06445,7.74023-3.44043,12.29785-3.44043,9.89014,0,14.36182,6.10644,14.36182,12.6416,0,5.84863-3.26807,10.0625-7.396,14.96387-3.78369,4.47168-5.15967,8.25586-4.90186,12.6416l.08594,2.23633Zm-1.89209,12.04a5.08415,5.08415,0,0,1,5.15967-5.418c3.01025,0,5.07422,2.23535,5.07422,5.418a5.12129,5.12129,0,1,1-10.23389,0Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#d0cde1"
          />
          <circle cx="482.69312" cy="260.84872" r="86.29225" fill="#2f2e41" />
          <polygon
            points="449.365 379.018 423.568 374.348 431.935 320.484 457.731 325.154 449.365 379.018"
            fill="#2f2e41"
          />
          <rect
            x="608.43233"
            y="564.07272"
            width="26.21537"
            height="46.9692"
            transform="translate(-14.69358 -333.60977) rotate(10.26106)"
            fill="#2f2e41"
          />
          <ellipse
            cx="626.08228"
            cy="611.19594"
            rx="8.1923"
            ry="21.84614"
            transform="translate(-226.21522 871.66478) rotate(-78.58697)"
            fill="#2f2e41"
          />
          <ellipse
            cx="572.1108"
            cy="611.25703"
            rx="8.1923"
            ry="21.84614"
            transform="translate(-238.2839 865.84819) rotate(-82.4537)"
            fill="#2f2e41"
          />
          <circle cx="488.73433" cy="239.74114" r="29.49229" fill="#fff" />
          <circle cx="500.85556" cy="229.16973" r="9.83076" fill="#3f3d56" />
          <path
            d="M543.91852,399.26184c-1.29768-31.94667,26.23575-59.00572,61.49764-60.43807s64.89929,23.30439,66.197,55.25107-23.21382,39.20523-58.47571,40.63758S545.21621,431.20852,543.91852,399.26184Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#fff"
          />
          <ellipse
            cx="691.67001"
            cy="477.41757"
            rx="43.14613"
            ry="13.5449"
            transform="translate(-218.47935 -65.68735) rotate(-12.9101)"
            fill="#2f2e41"
          />
          <ellipse
            cx="522.28158"
            cy="505.58661"
            rx="43.14613"
            ry="13.5449"
            transform="translate(-229.05476 -102.82038) rotate(-12.9101)"
            fill="#2f2e41"
          />
          <path
            d="M588.29085,527.14527A19.66153,19.66153,0,0,0,626.985,534.15c1.9343-10.68509-6.32706-14.46612-17.01215-16.40043S590.22516,516.46018,588.29085,527.14527Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#fff"
          />
          <rect
            x="154.5348"
            y="13.12227"
            width="141.88698"
            height="134.9673"
            fill="#d0cde1"
          />
          <rect
            x="170.65832"
            y="29.24579"
            width="109.63994"
            height="83.84231"
            fill="#fff"
          />
          <rect
            x="170.54973"
            y="122.97937"
            width="59.63671"
            height="3.13877"
            fill="#f2f2f2"
          />
          <rect
            x="170.54973"
            y="132.3957"
            width="59.63671"
            height="3.13877"
            fill="#f2f2f2"
          />
          <circle cx="190.16707" cy="71.18959" r="12.5551" fill="#3f3d56" />
          <circle cx="225.47829" cy="71.18959" r="12.5551" fill="#ffd60a" />
          <circle cx="260.7895" cy="71.18959" r="12.5551" fill="#e6e6e6" />
          <circle cx="225.47829" cy="20.9692" r="6.27755" fill="#3f3d56" />
          <rect
            x="222.02216"
            y="274.45884"
            width="141.88698"
            height="134.9673"
            fill="#d0cde1"
          />
          <rect
            x="238.14568"
            y="290.58236"
            width="109.63994"
            height="83.84231"
            fill="#fff"
          />
          <rect
            x="262.27176"
            y="304.36086"
            width="38.437"
            height="38.437"
            fill="#ffd60a"
          />
          <path
            d="M406.28392,546.26247V592.936h46.67356V546.26247Zm44.64908,44.649H408.30839V548.287H450.933Z"
            transform="translate(-129.29794 -232.28986)"
            fill="#3f3d56"
          />
          <rect
            x="238.0371"
            y="382.74656"
            width="59.63671"
            height="3.13877"
            fill="#f2f2f2"
          />
          <circle cx="292.96565" cy="282.30578" r="6.27755" fill="#3f3d56" />
          <rect
            x="591.4365"
            y="234.05278"
            width="141.88698"
            height="134.9673"
            fill="#d0cde1"
          />
          <rect
            x="607.56002"
            y="250.1763"
            width="109.63994"
            height="83.84231"
            fill="#fff"
          />
          <rect
            x="650.5867"
            y="315.8124"
            width="23.58659"
            height="6.98967"
            fill="#3f3d56"
          />
          <rect
            x="622.07157"
            y="261.39284"
            width="80.61684"
            height="2.99557"
            fill="#3f3d56"
          />
          <rect
            x="622.07157"
            y="270.87882"
            width="80.61684"
            height="2.99557"
            fill="#3f3d56"
          />
          <rect
            x="622.07157"
            y="280.36479"
            width="80.61684"
            height="2.99557"
            fill="#3f3d56"
          />
          <rect
            x="622.07157"
            y="289.85077"
            width="80.61684"
            height="2.99557"
            fill="#3f3d56"
          />
          <rect
            x="622.07157"
            y="299.33675"
            width="80.61684"
            height="2.99557"
            fill="#3f3d56"
          />
          <rect
            x="607.45144"
            y="342.3405"
            width="59.63671"
            height="3.13877"
            fill="#f2f2f2"
          />
          <rect
            x="607.45144"
            y="350.18743"
            width="83.17752"
            height="3.13877"
            fill="#f2f2f2"
          />
          <circle cx="662.37999" cy="241.89971" r="6.27755" fill="#3f3d56" />
        </svg>
      </div>
      <div className="rightLog">
        <div className="content">
          <div className="sus_ca_up_nu_merge">
            <div className="icon">
              <svg
                width="159"
                height="159"
                viewBox="0 0 159 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="79.5" cy="79.5" r="79.5" fill="#003566" />
                <path
                  d="M80.1903 126.939C79.7042 126.939 79.2131 126.931 78.7311 126.915L78.7421 126.539C79.4342 126.562 80.1405 126.569 80.8359 126.558L80.8407 126.935C80.6243 126.938 80.4075 126.939 80.1903 126.939ZM82.9492 126.852L82.9286 126.477C83.6218 126.433 84.3238 126.371 85.0153 126.293L85.0519 126.667C84.3552 126.746 83.6478 126.808 82.9492 126.852V126.852ZM76.6246 126.794C75.9256 126.736 75.2193 126.661 74.5251 126.569L74.5678 126.196C75.2567 126.287 75.9576 126.362 76.6513 126.418L76.6246 126.794ZM87.1444 126.38L87.0919 126.008C87.7806 125.896 88.4746 125.766 89.1541 125.621L89.2224 125.99C88.5376 126.136 87.8384 126.267 87.1444 126.38V126.38ZM72.4376 126.242C71.7471 126.117 71.0501 125.972 70.366 125.813L70.4403 125.445C71.1192 125.603 71.8108 125.747 72.4961 125.871L72.4376 126.242ZM91.2819 125.497L91.1977 125.132C91.8737 124.952 92.5536 124.754 93.2183 124.542L93.3179 124.903C92.648 125.116 91.9631 125.316 91.2819 125.497V125.497ZM68.3152 125.281C67.6378 125.088 66.9562 124.875 66.2892 124.649L66.3948 124.29C67.0567 124.515 67.7331 124.726 68.4052 124.918L68.3152 125.281ZM95.3262 124.209L95.2112 123.854C95.8673 123.609 96.5271 123.344 97.1727 123.067L97.3027 123.416C96.6523 123.696 95.9874 123.962 95.3262 124.209L95.3262 124.209ZM64.2874 123.914C63.6296 123.655 62.9676 123.375 62.3201 123.082L62.4562 122.735C63.0987 123.026 63.7555 123.304 64.4084 123.561L64.2874 123.914ZM99.2386 122.528L99.0935 122.186C99.7236 121.879 100.357 121.551 100.976 121.211L101.135 121.546C100.512 121.888 99.8734 122.219 99.2386 122.528V122.528ZM60.3913 122.153C59.759 121.83 59.1242 121.486 58.505 121.131L58.6701 120.799C59.2847 121.151 59.9145 121.493 60.5421 121.814L60.3913 122.153ZM102.988 120.471L102.814 120.144C103.419 119.774 104.022 119.385 104.607 118.988L104.794 119.306C104.205 119.706 103.597 120.098 102.988 120.471V120.471ZM56.665 120.016C56.0635 119.632 55.4612 119.227 54.8749 118.812L55.0677 118.498C55.6495 118.91 56.2472 119.312 56.8441 119.693L56.665 120.016ZM106.549 118.053L106.348 117.744C106.917 117.318 107.485 116.871 108.036 116.416L108.249 116.715C107.695 117.172 107.122 117.623 106.549 118.053ZM53.1385 117.523C52.5729 117.082 52.0079 116.62 51.459 116.149L51.6777 115.855C52.2224 116.322 52.7831 116.781 53.3443 117.218L53.1385 117.523ZM109.892 115.295L109.666 115.007C110.196 114.527 110.724 114.026 111.234 113.519L111.472 113.795C110.958 114.306 110.426 114.811 109.892 115.295V115.295ZM49.84 114.695C49.3132 114.2 48.7899 113.685 48.2846 113.164L48.5273 112.893C49.0288 113.41 49.5481 113.921 50.0708 114.413L49.84 114.695ZM112.988 112.22L112.739 111.956C113.228 111.424 113.711 110.874 114.176 110.32L114.436 110.572C113.968 111.13 113.481 111.684 112.988 112.22V112.22ZM46.7961 111.559C46.3128 111.014 45.8355 110.45 45.3775 109.883L45.6422 109.637C46.0967 110.199 46.5703 110.759 47.0501 111.3L46.7961 111.559ZM115.813 108.854L115.542 108.616C115.984 108.039 116.418 107.443 116.835 106.846L117.115 107.071C116.696 107.673 116.258 108.273 115.813 108.854ZM44.0316 108.14C43.5976 107.552 43.1702 106.944 42.7614 106.334L43.0457 106.114C43.4515 106.719 43.8756 107.322 44.3064 107.907L44.0316 108.14ZM118.341 105.225L118.051 105.014C118.442 104.396 118.825 103.761 119.189 103.124L119.487 103.321C119.12 103.962 118.735 104.603 118.341 105.225ZM41.5696 104.467C41.1877 103.839 40.814 103.192 40.4587 102.545L40.7606 102.354C41.1132 102.996 41.4841 103.638 41.863 104.262L41.5696 104.467ZM120.551 101.362L120.245 101.18C120.581 100.526 120.908 99.8552 121.216 99.1849L121.53 99.3517C121.22 100.027 120.89 100.703 120.551 101.362V101.362ZM39.4311 100.571C39.1043 99.9077 38.7874 99.2273 38.4893 98.5488L38.8062 98.3882C39.1021 99.0616 39.4165 99.7369 39.7408 100.395L39.4311 100.571ZM122.423 97.2949L122.102 97.1439C122.381 96.4593 122.649 95.7581 122.899 95.0601L123.226 95.195C122.974 95.8985 122.704 96.605 122.423 97.2949V97.2949ZM37.635 96.4832C37.3663 95.791 37.1091 95.0829 36.8704 94.3783L37.1998 94.2497C37.4366 94.949 37.6919 95.6516 37.9584 96.3384L37.635 96.4832ZM123.938 93.0568L123.605 92.9385C123.824 92.2311 124.03 91.5081 124.219 90.7894L124.556 90.8911C124.366 91.6154 124.158 92.3441 123.938 93.0568L123.938 93.0568ZM36.1953 92.2324C35.9869 91.5155 35.7909 90.7831 35.6131 90.0553L35.952 89.9598C36.1285 90.6821 36.323 91.4089 36.5299 92.1204L36.1953 92.2324ZM125.08 88.6971L124.739 88.6119C124.896 87.8869 125.039 87.1464 125.165 86.4115L125.51 86.4795C125.383 87.2203 125.238 87.9662 125.08 88.6972L125.08 88.6971ZM35.125 87.8518C34.9789 87.117 34.8466 86.3685 34.732 85.6266L35.0776 85.5649C35.1915 86.3013 35.3228 87.0441 35.4678 87.7732L35.125 87.8518ZM125.844 84.2434L125.496 84.1923C125.591 83.4556 125.67 82.7043 125.733 81.9592L126.082 81.993C126.019 82.744 125.939 83.5009 125.844 84.2434L125.844 84.2434ZM34.4344 83.3845C34.3518 82.6398 34.2839 81.8813 34.2327 81.1302L34.5823 81.1027C34.633 81.8483 34.7004 82.6009 34.7825 83.34L34.4344 83.3845ZM126.225 79.7337L125.875 79.7168C125.906 78.9713 125.922 78.2153 125.922 77.4697H126.272C126.272 78.221 126.256 78.9827 126.225 79.7337L126.225 79.7337ZM34.1265 78.8681C34.1146 78.4069 34.1085 77.9363 34.1084 77.4697C34.1084 77.1802 34.1107 76.8912 34.1153 76.6029L34.4658 76.6095C34.4611 76.8957 34.4588 77.1824 34.4588 77.4697C34.4589 77.9328 34.465 78.3999 34.4768 78.8578L34.1265 78.8681ZM125.919 76.9449C125.912 76.199 125.889 75.443 125.85 74.6978L126.2 74.6769C126.239 75.4278 126.262 76.1895 126.27 76.9409L125.919 76.9449ZM34.5489 74.3636L34.1992 74.3401C34.2429 73.5884 34.3033 72.8292 34.3785 72.0836L34.7269 72.1241C34.6522 72.8641 34.5924 73.6176 34.5489 74.3636V74.3636ZM125.686 72.4573C125.616 71.7156 125.529 70.9653 125.428 70.2268L125.774 70.1719C125.877 70.9159 125.964 71.672 126.035 72.4193L125.686 72.4573ZM34.9997 69.8957L34.6534 69.8382C34.7608 69.094 34.8855 68.3439 35.0242 67.6085L35.3676 67.6831C35.23 68.4129 35.1062 69.1573 34.9997 69.8957V69.8957ZM125.074 68.0118C124.94 67.278 124.79 66.5393 124.626 65.8163L124.966 65.7274C125.131 66.4559 125.283 67.2003 125.418 67.9396L125.074 68.0118ZM35.8298 65.491L35.4899 65.3996C35.66 64.671 35.8485 63.9363 36.0501 63.2159L36.3856 63.3241C36.1857 64.039 35.9987 64.768 35.8298 65.491ZM124.084 63.6452C123.888 62.9289 123.675 62.2083 123.449 61.5033L123.78 61.381C124.008 62.0914 124.223 62.8176 124.42 63.5394L124.084 63.6452ZM37.0361 61.1811L36.7055 61.0563C36.9384 60.3452 37.1899 59.6306 37.4529 58.9325L37.7778 59.0736C37.5168 59.7663 37.2672 60.4754 37.0361 61.1811H37.0361ZM122.723 59.3951C122.467 58.7028 122.193 58.008 121.909 57.3299L122.229 57.1754C122.515 57.8588 122.791 58.5589 123.049 59.2565L122.723 59.3951ZM38.6089 57.0058L38.2905 56.8487C38.5832 56.1645 38.8947 55.4783 39.2164 54.8093L39.5278 54.9818C39.2085 55.6458 38.8994 56.3267 38.6089 57.0058ZM121.008 55.3062C120.694 54.6421 120.362 53.9766 120.02 53.3284L120.325 53.1431C120.669 53.7963 121.004 54.4668 121.32 55.1361L121.008 55.3062ZM40.5323 53.0059L40.2286 52.8181C40.5782 52.1665 40.9468 51.5142 41.3244 50.8796L41.6197 51.082C41.2451 51.7119 40.8792 52.3592 40.5323 53.0059H40.5323ZM118.949 51.4004C118.579 50.7676 118.191 50.1372 117.797 49.5266L118.084 49.3123C118.482 49.9275 118.873 50.5627 119.246 51.2004L118.949 51.4004ZM42.7879 49.2141L42.5014 48.9973C42.9054 48.3822 43.3278 47.7692 43.7571 47.1751L44.034 47.4057C43.608 47.9953 43.1887 48.6037 42.7879 49.2141ZM116.565 47.7108C116.143 47.117 115.703 46.5267 115.258 45.9563L115.526 45.7147C115.975 46.2895 116.418 46.8842 116.844 47.4824L116.565 47.7108ZM45.3554 45.6607L45.0886 45.4168C45.542 44.8451 46.0145 44.2761 46.493 43.7256L46.7492 43.9822C46.2743 44.5286 45.8054 45.0934 45.3554 45.6607ZM113.877 44.2672C113.407 43.7172 112.918 43.172 112.426 42.647L112.673 42.3801C113.169 42.9092 113.661 43.4584 114.135 44.0126L113.877 44.2672ZM48.2122 42.3742L47.9672 42.1053C48.4683 41.579 48.9868 41.0587 49.5083 40.5589L49.7417 40.8396C49.2242 41.3356 48.7096 41.8519 48.2122 42.3742H48.2122ZM110.908 41.099C110.392 40.5967 109.859 40.1012 109.325 39.6265L109.548 39.3366C110.087 39.815 110.623 40.3141 111.143 40.8203L110.908 41.099ZM51.3343 39.3813L51.1131 39.0896C51.655 38.6158 52.2152 38.1484 52.778 37.7006L52.9867 38.0028C52.4281 38.4473 51.8722 38.911 51.3343 39.3813ZM107.681 38.2326C107.124 37.7826 106.551 37.3411 105.978 36.9204L106.176 36.61C106.754 37.0338 107.331 37.4786 107.891 37.9321L107.681 38.2326ZM54.6953 36.707L54.4998 36.395C55.0798 35.976 55.677 35.5657 56.2748 35.1753L56.4568 35.4967C55.8637 35.8841 55.271 36.2914 54.6953 36.707ZM104.222 35.693C103.63 35.2995 103.022 34.916 102.414 34.5528L102.585 34.2242C103.197 34.5901 103.81 34.9767 104.406 35.373L104.222 35.693ZM58.2676 34.3744L58.0994 34.0443C58.7131 33.6838 59.3423 33.3341 59.9696 33.0046L60.1236 33.3426C59.5011 33.6695 58.8767 34.0166 58.2676 34.3744L58.2676 34.3744ZM100.56 33.5028C99.9361 33.1693 99.2973 32.8471 98.6611 32.5452L98.8028 32.2012C99.444 32.5053 100.088 32.83 100.716 33.1661L100.56 33.5028ZM62.0211 32.4035L61.8818 32.0583C62.5231 31.7599 63.1791 31.4737 63.8316 31.2077L63.956 31.5594C63.3085 31.8234 62.6575 32.1074 62.0211 32.4035L62.0211 32.4035ZM96.723 31.6822C96.0741 31.4121 95.4101 31.1544 94.7491 30.9163L94.8606 30.5596C95.5266 30.7996 96.1958 31.0593 96.8496 31.3316L96.723 31.6822ZM65.9299 30.8101L65.8207 30.4526C66.4867 30.2182 67.1662 29.9975 67.8402 29.7968L67.9338 30.1593C67.265 30.3585 66.5907 30.5774 65.9299 30.8101L65.9299 30.8101ZM92.7491 30.2507C92.0808 30.0462 91.3991 29.8557 90.723 29.6846L90.8034 29.3185C91.4848 29.4909 92.1716 29.6829 92.8453 29.8889L92.7491 30.2507ZM69.9637 29.6083L69.8857 29.2416C70.5684 29.0741 71.2639 28.9216 71.9527 28.7882L72.015 29.1583C71.3313 29.2908 70.6412 29.4421 69.9637 29.6083V29.6083ZM88.6747 29.2195C87.9923 29.082 87.2972 28.9597 86.6087 28.8559L86.6573 28.4834C87.3511 28.588 88.0517 28.7112 88.7394 28.8497L88.6747 29.2195ZM74.0835 28.8102L74.0371 28.4373C74.7308 28.3379 75.4362 28.2543 76.1338 28.1891L76.1643 28.5638C75.472 28.6287 74.772 28.7115 74.0834 28.8102L74.0835 28.8102ZM84.5292 28.5943C83.8389 28.5245 83.1364 28.4707 82.4408 28.4346L82.4579 28.0588C83.1586 28.0952 83.8665 28.1494 84.562 28.2198L84.5292 28.5943ZM78.2539 28.4195L78.2392 28.0437C78.8832 28.0149 79.5396 28.0002 80.1904 28L80.349 28.0003L80.3479 28.3765L80.1904 28.3762C79.5446 28.3764 78.893 28.391 78.2539 28.4195V28.4195Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M80.3003 126.683V106.112C80.3006 105.823 80.4074 105.547 80.5972 105.343C80.787 105.14 81.0444 105.025 81.3128 105.025H83.612C83.8804 105.025 84.1378 105.14 84.3276 105.343C84.5174 105.547 84.6242 105.823 84.6245 106.112V126.683C84.6242 126.971 84.5174 127.247 84.3276 127.451C84.1378 127.655 83.8804 127.769 83.612 127.77H81.3128C81.0444 127.769 80.787 127.655 80.5972 127.451C80.4074 127.247 80.3006 126.971 80.3003 126.683V126.683Z"
                  fill="#2F2E41"
                />
                <path
                  d="M75.7529 126.683V106.112C75.7532 105.823 75.86 105.547 76.0498 105.343C76.2396 105.14 76.497 105.025 76.7654 105.025H79.0646C79.3331 105.025 79.5904 105.14 79.7802 105.343C79.97 105.547 80.0768 105.823 80.0771 106.112V126.683C80.0768 126.971 79.97 127.247 79.7802 127.451C79.5904 127.655 79.3331 127.769 79.0646 127.77H76.7654C76.497 127.769 76.2396 127.655 76.0498 127.451C75.86 127.247 75.7532 126.971 75.7529 126.683V126.683Z"
                  fill="#2F2E41"
                />
                <path
                  d="M84.8436 99.3201H75.5347C75.0185 99.3201 74.6001 99.7693 74.6001 100.323V111.612C74.6001 112.166 75.0185 112.615 75.5347 112.615H84.8436C85.3598 112.615 85.7782 112.166 85.7782 111.612V100.323C85.7782 99.7693 85.3598 99.3201 84.8436 99.3201Z"
                  fill="#2F2E41"
                />
                <path
                  d="M64.5394 67.001C64.5394 67.001 59.8415 69.3439 55.8661 70.8976C53.3991 64.9192 49.845 65.1429 49.845 65.1429L47.6903 66.7356L48.0789 69.1245L47.9729 73.0303L47.4077 75.078L48.2187 75.2353L48.6769 75.3245L48.7459 75.2575C48.6316 75.7437 48.5854 76.2456 48.6087 76.7465L68.9901 73.3337C68.9901 73.3337 68.2837 69.8072 64.5394 67.001Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M58.5209 97.7502L59.8874 99.7351C60.1942 100.181 60.7794 100.275 61.1945 99.9457L76.6048 87.7193C77.02 87.3899 77.1078 86.7617 76.801 86.316L75.4345 84.3311C75.1277 83.8855 74.5425 83.7912 74.1273 84.1206L58.717 96.347C58.3019 96.6763 58.2141 97.3046 58.5209 97.7502Z"
                  fill="#FFD60A"
                />
                <path
                  d="M84.7793 83.6569L82.7484 84.8138C82.2925 85.0736 82.119 85.681 82.361 86.1705L91.3435 104.341C91.5855 104.831 92.1513 105.017 92.6072 104.757L94.6381 103.6C95.0941 103.34 95.2676 102.733 95.0256 102.244L86.043 84.0728C85.8011 83.5833 85.2353 83.3971 84.7793 83.6569Z"
                  fill="#FFD60A"
                />
                <path
                  d="M90.4728 91.7212L87.156 94.0817C86.6491 94.3705 86.0421 94.2077 85.8001 93.7183L82.137 86.3084C81.8951 85.8189 82.1098 85.188 82.6167 84.8992L84.8743 83.6131C85.3811 83.3243 85.9882 83.4871 86.2301 83.9765L90.9524 90.3121C91.1944 90.8016 90.9796 91.4325 90.4728 91.7212Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M67.8703 89.5505L70.0262 92.6239C70.1958 92.8179 70.4303 92.9317 70.6781 92.9401C70.9258 92.9485 71.1665 92.8509 71.3473 92.6688L77.0448 86.9278C77.2256 86.7457 77.3315 86.494 77.3394 86.228C77.3472 85.962 77.2563 85.7036 77.0867 85.5096L75.5132 83.71C75.3436 83.516 75.1091 83.4022 74.8613 83.3938C74.6136 83.3854 74.3729 83.483 74.1921 83.6651L67.9122 88.1323C67.7314 88.3144 67.6255 88.5661 67.6177 88.8321C67.6098 89.0981 67.7007 89.3565 67.8703 89.5505V89.5505Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M85.4123 83.3611H74.9659C74.4497 83.3611 74.0312 83.8103 74.0312 84.3644V108.19C74.0312 108.744 74.4497 109.193 74.9659 109.193H85.4123C85.9285 109.193 86.347 108.744 86.347 108.19V84.3644C86.347 83.8103 85.9285 83.3611 85.4123 83.3611Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M80.1278 81.8064C84.7321 81.8064 88.4646 77.7995 88.4646 72.8567C88.4646 67.9139 84.7321 63.907 80.1278 63.907C75.5235 63.907 71.791 67.9139 71.791 72.8567C71.791 77.7995 75.5235 81.8064 80.1278 81.8064Z"
                  fill="#FFD60A"
                />
                <path
                  d="M81.0996 75.8448C80.5845 75.8293 79.9435 75.81 79.4502 75.423C79.3031 75.303 79.1823 75.1499 79.0962 74.9745C79.0101 74.799 78.9608 74.6055 78.9517 74.4074C78.9428 74.2667 78.9643 74.1257 79.0145 73.9953C79.0648 73.865 79.1425 73.749 79.2415 73.6562C79.4992 73.4224 79.8758 73.3672 80.2817 73.4955L79.8612 70.1968L80.17 70.1514L80.6641 74.0294L80.4064 73.9025C80.1078 73.7552 79.6975 73.6804 79.4426 73.9116C79.38 73.9721 79.3312 74.0472 79.3001 74.1311C79.269 74.2151 79.2563 74.3056 79.2631 74.3957C79.2706 74.5431 79.3076 74.687 79.3716 74.8177C79.4356 74.9483 79.5251 75.0627 79.6339 75.1529C80.0177 75.454 80.5289 75.4931 81.1085 75.5104L81.0996 75.8448Z"
                  fill="#2F2E41"
                />
                <path
                  d="M78.3346 70.4812H76.6567V70.8156H78.3346V70.4812Z"
                  fill="#2F2E41"
                />
                <path
                  d="M83.631 70.4812H81.9531V70.8156H83.631V70.4812Z"
                  fill="#2F2E41"
                />
                <path
                  d="M74.6206 65.8627C73.2694 65.6973 72.2229 64.3075 72.108 62.8974C71.9712 61.2198 72.8813 59.6264 74.1299 58.685C75.4356 57.7005 77.0624 57.2894 78.6364 57.1989C81.7069 57.0349 84.7244 58.1026 87.1023 60.1945C88.2817 61.2461 89.3832 62.5856 89.8007 64.2036C90.1633 65.6087 89.8682 67.2006 88.8155 68.1847C88.5551 68.4259 88.2509 68.6065 87.9222 68.7151C87.5935 68.8238 87.2474 68.8581 86.9057 68.8159C86.0889 68.7249 85.3352 68.2638 84.6828 67.7546C83.4137 66.7641 82.3719 65.3841 80.8258 64.8665C79.6921 64.487 78.221 64.8211 77.5282 65.9216C77.371 66.1736 77.2691 66.4605 77.2302 66.7609C77.2159 66.8249 77.2248 66.8924 77.2551 66.9497C77.2854 67.007 77.3349 67.0498 77.3934 67.0694C77.4532 67.0867 77.5169 67.078 77.5707 67.0452C77.6245 67.0124 77.6641 66.9582 77.6809 66.8942C77.8627 65.508 79.4505 64.9908 80.5646 65.3074C82.1891 65.7689 83.2796 67.3251 84.6124 68.3138C85.3132 68.8336 86.1102 69.2493 86.9696 69.3238C87.7105 69.3862 88.4458 69.1437 89.0263 68.6456C90.165 67.6804 90.6004 66.0202 90.3486 64.5256C90.0571 62.7947 88.9719 61.3113 87.7812 60.1628C85.3673 57.8591 82.2336 56.6164 79.0043 56.6822C77.3573 56.7228 75.6387 57.0878 74.2198 58.0223C72.8434 58.9288 71.7796 60.4454 71.6406 62.2083C71.5182 63.7599 72.2937 65.3829 73.6248 66.0627C73.9387 66.2223 74.2753 66.3243 74.6206 66.3644C74.9189 66.4009 74.9164 65.899 74.6206 65.8627H74.6206Z"
                  fill="#2F2E41"
                />
                <path
                  d="M48.6614 75.021L49.6505 74.6797C49.7564 74.4617 49.5625 74.6016 49.655 74.3896C52.1573 68.6588 49.8447 65.1428 49.8447 65.1428L48.0557 66.4652C48.0513 66.4543 48.0477 66.4431 48.0432 66.4321C48.0433 66.4321 47.7253 65.6737 47.2308 66.2425C47.2308 66.2425 48.785 70.3 47.0542 75.3433L49.0676 76.3293L49.8447 75.3433L49.8624 75.2485L48.4716 75.1128L48.6614 75.021Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M76.867 96.3132C68.9193 94.4172 61.5191 98.3419 61.5191 98.3419L61.499 98.3226L58.552 95.4979L47.0366 75.3245L49.8448 75.3435C57.6512 70.338 68.6367 71.0206 68.6367 71.0206C73.37 76.7844 76.867 96.3132 76.867 96.3132Z"
                  fill="#3F3D56"
                />
                <path
                  opacity="0.1"
                  d="M61.499 98.3225L58.552 95.4979L47.0366 75.3245L49.8448 75.3434C49.8448 75.3434 61.0373 91.2125 61.499 98.3225Z"
                  fill="black"
                />
                <path
                  d="M62.7924 82.5821C65.1984 81.7899 66.7685 79.8167 66.2994 78.1749C65.8303 76.5331 63.4996 75.8444 61.0937 76.6366C58.6877 77.4288 57.1176 79.402 57.5867 81.0438C58.0558 82.6856 60.3864 83.3743 62.7924 82.5821Z"
                  fill="#FFD60A"
                />
                <path
                  d="M38.1926 65.543C37.558 68.0613 35.3844 69.6209 35.3844 69.6209C35.3844 69.6209 34.2397 67.0976 34.8743 64.5794C35.5088 62.0611 37.6824 60.5015 37.6824 60.5015C37.6824 60.5015 38.8272 63.0248 38.1926 65.543Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M32.4192 65.543C33.0538 68.0613 35.2274 69.6209 35.2274 69.6209C35.2274 69.6209 36.3721 67.0976 35.7375 64.5794C35.1029 62.0611 32.9293 60.5015 32.9293 60.5015C32.9293 60.5015 31.7846 63.0248 32.4192 65.543Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M33.3519 65.0018C35.0932 66.8215 35.3059 69.6189 35.3059 69.6189C35.3059 69.6189 32.6953 69.4658 30.954 67.6461C29.2127 65.8264 29 63.0291 29 63.0291C29 63.0291 31.6105 63.1821 33.3519 65.0018Z"
                  fill="#3F3D56"
                />
                <path
                  d="M37.2597 65.0018C35.5184 66.8215 35.3057 69.6189 35.3057 69.6189C35.3057 69.6189 37.9162 69.4658 39.6575 67.6461C41.3988 65.8264 41.6115 63.0291 41.6115 63.0291C41.6115 63.0291 39.001 63.1821 37.2597 65.0018Z"
                  fill="#3F3D56"
                />
                <path
                  d="M125.581 93.9713C124.946 96.4895 122.773 98.0492 122.773 98.0492C122.773 98.0492 121.628 95.5259 122.262 93.0076C122.897 90.4893 125.071 88.9297 125.071 88.9297C125.071 88.9297 126.215 91.453 125.581 93.9713Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M119.808 93.9713C120.442 96.4895 122.616 98.0492 122.616 98.0492C122.616 98.0492 123.761 95.5259 123.126 93.0076C122.492 90.4893 120.318 88.9297 120.318 88.9297C120.318 88.9297 119.173 91.453 119.808 93.9713Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M120.74 93.43C122.481 95.2497 122.694 98.0471 122.694 98.0471C122.694 98.0471 120.084 97.8941 118.342 96.0743C116.601 94.2546 116.388 91.4573 116.388 91.4573C116.388 91.4573 118.999 91.6103 120.74 93.43Z"
                  fill="#3F3D56"
                />
                <path
                  d="M124.648 93.43C122.907 95.2497 122.694 98.0471 122.694 98.0471C122.694 98.0471 125.305 97.8941 127.046 96.0743C128.788 94.2546 129 91.4573 129 91.4573C129 91.4573 126.39 91.6103 124.648 93.43Z"
                  fill="#3F3D56"
                />
                <path
                  d="M98.4688 127.666H62.3296V128H98.4688V127.666Z"
                  fill="#3F3D56"
                />
              </svg>
            </div>
            <h1 className="logo">College_Picker</h1>
            <p>Logheaza-te sau fa ceva</p>
          </div>

          <div className="form">
            <input
              type="text"
              placeholder="Nume"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Parola"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <select
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Alege un rol</option>
              <option value="elev">Elev</option>
              <option value="mod">Facultate</option>
            </select>
            <div
              onClick={register}
              className="mainButton"
              style={{ width: "min-content" }}
            >
              {" "}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
