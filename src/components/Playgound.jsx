import React, { useState } from "react";
import { getSignedUrl, uploadFileToSignedUrl } from "../api";
import CircularProgress from "@mui/material/CircularProgress";

const Playgound = () => {
  const [fileLink, setFileLink] = useState("");
  const [loading, setLoading] = useState(false);
  const onFileSelect = (e) => {
    const file = e.target.files[0];
    const content_type = file.type;
    const key = `test/image/${file.name}`;

    getSignedUrl({ key, content_type }).then((response) => {
      console.log(response);
      uploadFileToSignedUrl(
        response.data.signedUrl,
        file,
        content_type,
        () => setLoading(true),
        () => {
          setLoading(false);
          setFileLink(response.data.fileLink);
        }
      );
    });
  };

  if (loading) return <CircularProgress style={{ marginTop: "20px" }} />;
  return (
    <div>
      <h1>Playground</h1>
      <img src={fileLink} />
      <input type="file" accept="*" onChange={onFileSelect} />
    </div>
  );
};

export default Playgound;
