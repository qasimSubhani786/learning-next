"use client";
import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const API_KEY = process.env.API_KEY;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_Secret = process.env.CLIENT_Secret;
const SCOPES = process.env.SCOPES;

const openLinkInNewTab = (url) => {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer"; // This prevents security issues
  anchor.click();
};
const Login = () => {
  const onSuccess = (res) => {
    console.log("Login Success! Current User: ", res?.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed! Current User: ", res);
  };

  return (
    <div id="border">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};

const LogOut = () => {
  const onSuccess = () => {
    console.log("Logout Success! Current User: ");
  };

  return (
    <div id="border">
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

function MainPage() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  var documentID = localStorage.getItem("DocumentId") ?? null;

  const createFile = async () => {
    if (documentID) {
      return openLinkInNewTab(
        `https://docs.google.com/document/d/${documentId}/edit`
      );
    }
    var accessToken = gapi.auth.getToken().access_token;
    const fileName = "Testing Docx file Name " + Date.now().toLocaleString();
    const response = await fetch(
      "https://docs.googleapis.com/v1/documents?title=" + fileName,
      {
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
      }
    );

    let result = await response.json();
    const documentId = result.documentId;
    console.log("Result", result.documentId);
    localStorage.setItem("DocumentId", documentId);
    openLinkInNewTab(`https://docs.google.com/document/d/${documentId}/edit`);
  };
  return (
    <div>
      <Login />
      <LogOut />

      <button className="btn" onClick={createFile}>
        {`${documentID ? "View" : "Create"} google Docx File`}
      </button>
    </div>
  );
}

export default MainPage;
