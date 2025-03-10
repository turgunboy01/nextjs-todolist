"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-black">
      <input
        placeholder="Topic Title"
        type="text"
        className="border border-slate-500 px-8 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Topic Description"
        type="text"
        className="border border-slate-500 px-8 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className="w-fit font-bold bg-green-600 px-6 text-white py-3">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
