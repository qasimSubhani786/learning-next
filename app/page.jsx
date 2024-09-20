"use client";
import React, { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const API_KEY = "AIzaSyAQ5d4xBlQ4N01XV8Sp11pM6TKnb0coZ6Q";
const CLIENT_ID =
  "340333856491-fbeavp89pggtigfsn1h0a5bmkavudasj.apps.googleusercontent.com";
const CLIENT_Secret = "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";
const SCOPES = "https://www.googleapis.com/auth/drive";

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
      return window.open(
        `https://docs.google.com/document/d/${documentID}/edit`,
        "_blank"
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
    window.open(
      `https://docs.google.com/document/d/${documentId}/edit`,
      "_blank"
    );
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
