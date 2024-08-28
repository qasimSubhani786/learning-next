"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "./components/ProductCard/ProductCard";
import * as Realm from "realm-web";
import { useEffect, useState } from "react";
import { debounce } from "./_libs/util/helper";

// Create the Application

const app: any = new Realm.App({ id: "application-0-kmhqtkf" });

export default function Home() {
  const [user, setUser] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const login = async () => {
      // Authenticate anonymously
      const user: any = await app.logIn(Realm.Credentials.anonymous());
      setUser(user);
      // Connect to the database
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb
        .db("realtime-socket")
        .collection("realtimesockets");

      // Fetch all data initially
      const fetchAllData = async () => {
        let result = await fetchUsersList();
        setEvents(result.content);
      };
      // Debounced fetchAllData to limit calls
      const debouncedFetchAllData = debounce(fetchAllData, 1000); // Adjust delay as needed

      // Everytime a change happens in the stream, add it to the list of events
      for await (const change of collection.watch()) {
        debugger;
        if (change.operationType === "update") {
          debouncedFetchAllData();
        }
      }
    };
    login();
  }, []);

  const fetchUsersList = async () => {
    let response = await fetch("/api/socket/update-order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Specify that the body contains JSON
      },
    });
    return response.json();
  };

  const fetchAllData = async (collection: any) => {
    let result = await fetchUsersList();
    setEvents(result.content);
  };
  useEffect(() => {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongodb
      .db("realtime-socket")
      .collection("realtime-socket");

    fetchAllData(collection);
  }, []);

  return (
    <main>
      <div className="App">
        {!!user && (
          <div className="App-header p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">
              Connected as user {user.id}
            </h1>
            <div>
              <p className="text-lg font-medium mb-2">Latest events:</p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr className="text-lg font-bold">
                      <th className="px-6 py-3 border-b-2">Name</th>
                      <th className="px-6 py-3 border-b-2">Language</th>
                      <th className="px-6 py-3 border-b-2">Bio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((e, i) => (
                      <tr
                        className={`border-t hover:bg-gray-50 ${
                          i % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                        key={i}
                      >
                        <td className="px-6 py-4">{e.name}</td>
                        <td className="px-6 py-4">{e.language.toString()}</td>
                        <td className="px-6 py-4 truncate max-w-xs">{e.bio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <h1>Hellow World.</h1>
      <Link href="/users"> USers Page </Link>
      <br />
      <Link href="/products"> Products Listing </Link>
      <ProductCard /> */}
    </main>
  );
}
