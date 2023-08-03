import { useState } from "react";
import FormPart from "../components/FormPart";
import Header2 from "../components/Header2";
import DialogBox from "../components/DialogBox";
import Post from "../components/postbox/Post";
import AllPosts from "../components/postbox/AllPosts";

function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Header2 />
      <FormPart toggle={toggle} setToggle={setToggle} />
      <AllPosts />
    </div>
  );
}

export default Home;
