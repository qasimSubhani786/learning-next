"use client";
import React, { useRef } from "react";
import * as Realm from "realm-web";
import { useEffect, useState } from "react";
import DraggableList from "react-draggable-list";
import { list } from "postcss";
import { debounce } from "../_libs/util/helper";

// Create the Application

const app = new Realm.App({ id: "application-0-kmhqtkf" });

function Master() {
  const [userData, setUserData] = useState([]);
  const containerRef = useRef();

  const fetchAllData = async () => {
    let result = await fetchUsersList();
    setUserData(result.content);
  };

  useEffect(() => {
    const mongodb = app.currentUser.mongoClient("mongodb-atlas");
    const collection = mongodb
      .db("realtime-socket")
      .collection("realtimesockets");
    const getUsersListData = async () => {
      const debouncedFetchAllData = debounce(fetchAllData, 1000); // Adjust delay as needed

      for await (const change of collection.watch()) {
        debouncedFetchAllData();
      }
    };

    getUsersListData();
    fetchAllData();
  }, []);

  const updateSortOrderHandler = async (list) => {
    await fetch("/api/socket/update-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify that the body contains JSON
      },
      body: JSON.stringify({
        userList: list, // Convert the JavaScript object to a JSON string
      }),
    });
  };
  const fetchUsersList = async () => {
    let response = await fetch("/api/socket/update-order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Specify that the body contains JSON
      },
    });
    return response.json();
  };

  const _onListChange = async (result, source, destination, movedItem) => {
    const sourceIndex = source;
    const destinationIndex = destination;
    if (sourceIndex != destinationIndex) {
      const newList = result.map((i, index) => ({ ...i, id: index }));
      setUserData(result);
      await updateSortOrderHandler(newList);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h2 className=" text-center p-4 font-extrabold text-2xl">MASTER VIEW</h2>

      <div className="min-w-full bg-white border border-gray-200 rounded-lg">
        <div className="bg-gray-200 text-gray-700 flex items-center justify-between">
          <span className="px-6 py-3 border-b-2">Name</span>
          <span className="px-6 py-3 border-b-2">Language</span>
          <span className="px-6 py-3 border-b-2">Bio</span>
        </div>
        <div className="  flex">
          <DraggableList
            itemKey="id"
            template={({ item, itemSelected, dragHandleProps }) => {
              const { onMouseDown, onTouchStart, onMouseUp, ...restProps } =
                dragHandleProps;

              return (
                <div
                  onTouchStart={(e) => {
                    e.preventDefault();
                    // document.body.style.overflow = "hidden";
                    onTouchStart(e);
                  }}
                  onMouseDown={(e) => {
                    // document.body.style.overflow = "hidden";
                    e.preventDefault();
                    onMouseDown(e);
                  }}
                  className={`border-t hover:bg-gray-50  cursor-pointer  flex w-screen items-center justify-between disable-select dragHandle  ${
                    item?.id % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                  key={item}
                >
                  <span className="px-6 py-4 flex-1 ">{item.name}</span>
                  <span className="px-6 py-4 flex-1">
                    {item.language.toString()}
                  </span>
                  <span className="px-6 py-4 truncate max-w-xs flex-1">
                    {item.bio}
                  </span>
                </div>
              );
            }}
            list={userData}
            onMoveEnd={(newList, movedItem, oldIndex, newIndex) => {
              _onListChange(newList, oldIndex, newIndex, movedItem);
            }}
            container={() => containerRef.current}
          />
        </div>
      </div>
    </div>
  );
}

export default Master;
