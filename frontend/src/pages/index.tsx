import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

type MyApiType = {
  data: string;
};

export default function Home() {
  const [allresponse, setAllresponse] = useState<any>([]);

  const handleOnclick = async () => {
    const url1 = "http://localhost:4000/first";
    const url2 = "http://localhost:4000/second";
    const url3 = "http://localhost:4000/third";
    const url4 = "http://localhost:4000/fourth";

    const myResponse = await Promise.all([
      axios.get(url1),
      axios.get(url2),
      axios.get(url3),
      axios.get(url4),
    ]);

    console.log("my responses are:", myResponse);
    setAllresponse(myResponse);
  };

  return (
    <>
      <div style={{ marginTop: "30px", marginLeft: "20px" }}>
        <button onClick={handleOnclick}>
          Get all responses through multiple APIs
        </button>

        <div style={{ marginTop: "30px" }}>
          {allresponse.map((resp: MyApiType, idx: number) => (
            <div key={idx}>
              the response for api call {idx + 1} is :- {resp.data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
