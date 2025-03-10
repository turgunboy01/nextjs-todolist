"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
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
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        placeholder="Topic Description"
        type="text"
        className="border border-slate-500 px-8 py-2"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="w-fit font-bold bg-green-600 px-6 text-white py-3">
        Update Topic
      </button>
    </form>
  );
};
