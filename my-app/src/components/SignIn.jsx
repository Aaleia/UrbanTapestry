import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { jwtDecode } from "jwt-decode";
import "./../components/SignIn.css";

function SignIn() {
  const [user, setUser] = useState({});

  function HandleCallBackResonse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "990897524537-e4bfsl2qgub4mckkichm61ta3citoa5j.apps.googleusercontent.com",
      callback: HandleCallBackResonse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // If no user -> show sign in button
  //If user is signed in --> show log out button

  return (
    <div className="App">
      <div class="heading">User Login</div>
      <div class="signInDiv">
        {user && (
          <div>
            <img src={user.picture}></img>
            <h1> {user.name}</h1>
            {user.name && (
              <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;