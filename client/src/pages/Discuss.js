import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

function Discuss() {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(async () => {
    setReadError(null);
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chat = [];
        snapshot.forEach((snap) => {
          chat.push(snap.val());
        });
        setChats(chat);
      });
    } catch (err) {
      setReadError(err.message);
    }
  }, []);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWriteError(null);
    try {
      await db.ref("chats").push({
        content,
        timestamp: Date.now(),
        email: user.email,
        uid: user.uid,
      });
      setContent("");
    } catch (err) {
      setWriteError(err.message);
    }
  };

  return (
    <div>
      <h2 className="bg-red-500 text-3xl text-gray-200 font-mono mx-10 p-5 rounded-lg flex justify-center">
        WELCOME TO Discuss <br></br> Post all your CP queries here , and help out your
        buddies !
      </h2>

      <div className="bg-green-200 m-3">
        {chats.map((chat) => {
          return (
            <p className="flex justify-start mx-20 p-2 " key={chat.timestamp}>
              <div className="bg-purple-500 mx-10 my-2 p-3 text-gray-100 text-xl rounded-full">
                {" "}
                <strong>{chat.email}</strong> : {chat.content}
              </div>
            </p>
          );
        })}
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            className="border-blue-600 border-2"
            value={content}
            onChange={handleChange}
          ></input>
          {writeError ? <p>{writeError}</p> : null}
          <button
            className="rounded-full bg-green-400 text-xl text-gray-300 mx-2 px-2"
            type="submit"
          >
            Post
          </button>
        </form>
        <div>
          LoggedIn as: <strong>{user.email}</strong>
        </div>
      </div>
    </div>
  );
}

export default Discuss;
