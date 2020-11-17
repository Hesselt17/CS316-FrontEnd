import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    textAlign: "center",
    padding: "20px",
    border: "3px dashed #eeeeee",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
  },
}));

const initialProps = {
  category: "",
  building: "",
  roomtype: "",
  tags: "",
};

const Upload = (props) => {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [uploadProps, setUploadProps] = useState(initialProps);

  const [textInput, setTextInput] = useState({
    avatar: null,
    bio:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    email: "",
    name: "",
    netid: "hpw97",
    password: "62VQcpwdF",
    score: 0,
    wherelive: "",
  });

  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0]);
    const imageFile = acceptedFiles[0];
    setFile(imageFile);
    console.log(file);
  };

  const onUpload = () => {
    props.firebase.uploadPic(file);
  };

  const submitEdits = () => {
    axios
      .get(`http://vcm@vcm-17053.vm.duke.edu/designs/46`, textInput)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>Upload</div>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*, video/*, .mov"
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
      <TextField
        className={classes.filter}
        id="DIYDorm"
        select
        label="Select"
        //value={currency}
        //onChange={handleChange}
        helperText="Select Filter(s)"
        variant="filled"
      >
        {/*currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))*/}
      </TextField>
    </div>
  );
};

export default Upload;
