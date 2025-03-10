import React from "react";
import { RemoveBtn } from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.log("Error fetching topics:", error);
    return { topics: [] }; // ⚠️ Kamida bo‘sh array qaytarish
  }
};

export const TopicLists = async () => {
  const data = await getTopics();

  if (!data || !data.topics) {
    return <p>No topics available</p>; // ⚠️ Agar API ishlamayotgan bo‘lsa, foydalanuvchiga bildirish
  }
  return (
    <>
      {data?.topics.map((t) => (
        <div
          key={t._id}
          className="flex justify-between items-start gap-5 p-4 border border-slate-300 my-4"
        >
          <div className="">
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </div>

          <div className=" flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
