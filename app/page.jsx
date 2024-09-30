"use client";

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

const CLIENT_ID =
process.env.CLIENT_ID
const API_KEY = process.env.API_KEY
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/drive.file";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [files, setFiles] = useState([]);
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(null);
  const [changedFiles, setChangedFiles] = useState({});
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
    }
    gapi.load("client:auth2", start);

    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUserName = localStorage.getItem("userName");
    const storedToken = localStorage.getItem("token");

    if (storedLogin === "true" && storedUserName && storedToken) {
      setIsLoggedIn(true);
      setUserName(storedUserName);
      setToken(storedToken);
      listFiles(storedToken);
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (nextPageToken) {
      intervalId = setInterval(checkForChanges, 10000);
    }
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [nextPageToken]);

  const checkForChanges = () => {
    setTimeout(() => {
      if (nextPageToken && gapi.client) {
        gapi.client.drive.changes
          .list({
            pageToken: nextPageToken,
            fields: "changes(fileId, file(name, modifiedTime))",
          })
          .then((response) => {
            const changes = response.result.changes || [];
            changes.forEach((change) => {
              setChangedFiles((prev) => ({
                ...prev,
                [change.fileId]: true,
              }));
            });
            if (response.result.newStartPageToken) {
              setNextPageToken(response.result.newStartPageToken);
            } else if (response.result.nextPageToken) {
              setNextPageToken(response.result.nextPageToken);
            }
          })
          .catch((error) => {
            console.error("Error fetching changes:", error);
          });
      }
    }, 100);
  };

  const listFiles = (accessToken) => {
    setTimeout(() => {
      if (accessToken && gapi.client) {
        gapi.client.setToken({ access_token: accessToken });

        gapi.client.drive.changes.getStartPageToken().then((response) => {
          const startPageToken = response.result.startPageToken;
          setNextPageToken(startPageToken);

          // List the files
          gapi.client.drive.files
            .list({
              q: "mimeType='application/vnd.google-apps.document'",
              fields: "nextPageToken, files(id, name, modifiedTime)",
            })
            .then((response) => {
              setFiles(response.result.files);

              // Initialize changed files state
              const initialChangedFiles = {};
              response.result.files.forEach((file) => {
                initialChangedFiles[file.id] = false; // No changes detected initially
              });
              setChangedFiles(initialChangedFiles);
            });
        });
      }
    }, 1000);
  };

  const deleteFile = async (fileId) => {
    try {
      await gapi.client.drive.files.delete({ fileId: fileId });
      setFiles(files.filter((file) => file.id !== fileId));
      setChangedFiles((prev) => ({ ...prev, [fileId]: true }));
      alert("File deleted successfully.");
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Failed to delete file.");
    }
  };

  const onSuccess = (response) => {
    setIsLoggedIn(true);
    setUserName(response.profileObj.name);
    const token = response.accessToken;
    setToken(token);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", response.profileObj.name);
    localStorage.setItem("token", token);

    listFiles(token);
  };

  const onFailure = (response) => {
    console.error("Login failed:", response);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFiles([]);
    setUserName("");
    setToken(null);
    setChangedFiles({});
    setNextPageToken("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
  };

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6 " >
      {!isLoggedIn ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-600 pt-[80px]">
            Welcome to Drive Manager!
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Easily manage your Google Drive files in one place. View, edit, and
            delete your documents with just a few clicks.
          </p>
          <p className="mb-8 text-md text-gray-500">
            Login to access your files and stay organized.
          </p>
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-white shadow-lg p-6 rounded-lg">
          <div className="sticky top-0 z-10 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome, {userName}!
              </h2>
              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
              />
            </div>
            <div className="mt-2 mb-4">
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            {loading ? (
              <p className="text-gray-600">Loading files...</p>
            ) : filteredFiles && filteredFiles.length > 0 ? (
              <div className="space-y-4">
                {filteredFiles.map((file) => (
                  <div
                    key={file.id}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col">
                      <a
                        href={`https://drive.google.com/file/d/${file.id}/view`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-lg font-semibold"
                      >
                        {file.name}
                      </a>
                      <span className="text-gray-600">
                        Modified:{" "}
                        {new Date(file.modifiedTime).toLocaleDateString()}
                      </span>
                      {changedFiles[file.id] && (
                        <span className="text-green-500 mt-1">
                          🟢 File Changed!
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => deleteFile(file.id)}
                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                      <a
                        href={`https://docs.google.com/document/d/${file.id}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No files found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
