// component\player.jsx

import { useRef, useEffect } from "react";
import { tplayer, destroyPlayer } from "tplayer.js";

export default function Player({ config }) {
  const videoRef = useRef();

  useEffect(() => {
    tplayer({
      ...config,
      playerElem: videoRef.current,
    });

    return () => destroyPlayer({ id: config.id });
  }, []);

  return (
    <div>
      <video ref={videoRef}></video>
    </div>
  );
}