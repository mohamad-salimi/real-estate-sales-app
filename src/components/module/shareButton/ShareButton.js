"use client";

import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// Styles
import styles from "./ShareButton.module.scss";
// Icon
import { LuShare2 } from "react-icons/lu";

const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
