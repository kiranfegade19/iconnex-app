import { Button } from "bootstrap";
import React from "react";
import Connect from "./mainconnect/Connect";
import MainSearch from "./mainsearch/MainSearch";

function MainBody() {
  return (
    <>
      <div className={`Main-body`}>
        
        <Connect />

        <div className={`Vertical-line`} />

        <MainSearch />
      </div>
    </>
  );
}

export default MainBody;
