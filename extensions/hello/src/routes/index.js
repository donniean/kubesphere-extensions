import React, { useState, useRef } from "react";
import { Loading } from "@kubed/components";

export default function App() {
  const [loading, setLoading] = useState(true);
  const FRAME_URL = "http://hello.www.ks.com";
  const iframeRef = useRef();
  const onIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading className="page-loading" />}
      <iframe
        ref={iframeRef}
        src={FRAME_URL}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{
          height: "calc(100vh - 68px)",
          display: loading ? "none" : "block",
        }}
        onLoad={onIframeLoad}
      />
    </>
  );
}