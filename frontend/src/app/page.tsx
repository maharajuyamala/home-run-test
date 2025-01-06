"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    fetch(`${apiUrl}api/hello/`)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
