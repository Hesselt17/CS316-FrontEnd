import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    textAlign: "center",
    padding: "20px",
    border: "3px dashed #eeeeee",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
  },
}));

const Upload = (props) => {
  const classes = useStyles();
  const [file, setFile] = useState();

  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0]);
    const imageFile = acceptedFiles[0];
    setFile(imageFile);
    console.log(file);
  };

  const onUpload = () => {
    props.firebase.uploadPic(file);
  };

  return (
    <div>
      <div>Upload</div>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps({ className: classes.dropzone })}>
            <input {...getInputProps()} />
            {!isDragActive
              ? "Click here or drag a file to upload!"
              : "Now just drop the file to upload"}
          </div>
        )}
      </Dropzone>
      <Button variant="contained" onClick={onUpload}>
        Upload
      </Button>
      <div>
        <strong>File:</strong>
        {file && file.path}
      </div>
    </div>
  );
};

export default Upload;
