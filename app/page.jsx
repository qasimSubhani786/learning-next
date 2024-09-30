"use client";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const API_KEY = "AIzaSyAQ5d4xBlQ4N01XV8Sp11pM6TKnb0coZ6Q";
const CLIENT_ID =
  "340333856491-fbeavp89pggtigfsn1h0a5bmkavudasj.apps.googleusercontent.com";
const CLIENT_Secret = "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";
const SCOPES = "https://www.googleapis.com/auth/drive";

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
  const [fileId, setFileId] = useState(""); // Google Docs file ID you want to watch

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        ],
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  var documentID = localStorage.getItem("DocumentId") ?? null;

  const createFile = async () => {
    debugger;
    if (documentID) {
      return openLinkInNewTab(
        `https://docs.google.com/document/d/${documentID}/edit`
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

  const handleWatchFile = async () => {
    debugger;
    const accessToken = gapi.auth.getToken().access_token;

    // Use Google Drive API to set up a watch on the file
    const channelId = "unique-channel-12"; // Generate a unique channel ID
    const webhookUrl = "https://b02d-154-80-62-159.ngrok-free.app/api/webhook"; // Your webhook URL

    gapi.client
      .request({
        path: `/drive/v3/files/${fileId}/watch`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: {
          id: channelId,
          type: "web_hook",
          address: webhookUrl,
        },
      })
      .then((response) => {
        console.log("Watch setup:", response);
      })
      .catch((error) => {
        console.error("Error setting up watch:", error);
      });
  };

  return (
    <div>
      <Login />
      <LogOut />

      <button className="btn" onClick={createFile}>
        {`${documentID ? "View" : "Create"} google Docx File`}
      </button>

      <input
        type="text"
        placeholder="Enter Google Docs File ID"
        value={fileId}
        onChange={(e) => setFileId(e.target.value)}
      />
      <button onClick={handleWatchFile}>Watch File for Changes</button>
    </div>
  );
}

export default MainPage;
