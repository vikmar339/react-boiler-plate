import { useEffect, useState } from "react";
import ChatBot from "../ChatBot";

const Home = () => {
  const [siteId, setSiteId] = useState("");
  useEffect(() => {
    const ele = document.getElementById("RMS_widget");
    const id: any = ele?.getAttribute("siteId");
    setSiteId(id);
  }, []);
  return (
    <>
      <ChatBot siteId={siteId} />
    </>
  );
};

export default Home;
