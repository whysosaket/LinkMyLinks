import React, { useEffect } from "react";
import AddLink from "../../components/AddLink/AddLink";
import Greet from "../../components/Greet/Greet";
import Links from "../../components/Links/Links";
import LinkContext from "../../context/links/linkContext";

const Home = () => {
  const contextLink = React.useContext(LinkContext);
  const { clearLinks } = contextLink;

  useEffect(() => {
    clearLinks();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {localStorage.getItem("lmltoken") == null ? (
        <Greet />
      ) : (
        <>
          <Links />
          <AddLink />
        </>
      )}
    </div>
  );
};

export default Home;
