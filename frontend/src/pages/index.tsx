import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const handleOnclick = async () => {
    const url1 = "http://localhost:4000/first";
    const url2 = "http://localhost:4000/second";
    const url3 = "http://localhost:4000/third";
    const url4 = "http://localhost:4000/fourth";

    const [response1, response2, response3, response4] = await Promise.all([
      axios.get(url1),
      axios.get(url2),
      axios.get(url3),
      axios.get(url4),
    ]);
    console.log("first response :",response1.data);
    console.log("second response :",response2.data);
    console.log("third response :",response3.data);
    console.log("fourth response :",response4.data);
  };

  return (
    <>
      <div style={{ marginTop: "30px", marginLeft: "20px" }}>
        <button onClick={handleOnclick}>
          Get all responses through multiple APIs
        </button>
      </div>
    </>
  );
}
