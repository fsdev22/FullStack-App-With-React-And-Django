import React from "react";
import { Button, TextField } from "@mui/material";
import classes from "./CustomForm.module.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { getTenDigitRandomNumber } from "../Helper/utils";
import { useDispatch } from "react-redux";
import { userAction } from "../Redux/Store";
import { useHistory } from "react-router-dom";

function CustomForm() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [inputfields, setInputFields] = useState([
    { username: "", email: "", phonenumber: "", address: "" },
  ]);
  const handleFormChange = (index, event) => {
    let data = [...inputfields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addUsers = () => {
    let newUser = { username: "", email: "", phonenumber: "", address: "" };
    setInputFields([...inputfields, newUser]);
  };

  const postToServer = async (data_to_be_sent) => {
    const response = await fetch("http://127.0.0.1:8000/apis/v1/test/", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_to_be_sent),
    });

    const jsonData = await response.json();
    dispatch(
      userAction.updateUserDetails({
        totaluser: jsonData.data.totalnumberofusers,
        users: jsonData.data.users,
      })
    );
    if(response.status===200){
           history.replace('/finalpage')
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data_to_be_sent = {
      record_name: getTenDigitRandomNumber(),
      users: inputfields,
    };
    postToServer(data_to_be_sent);
  };

  return (
    <div>
      <h2 className={classes.heading}>Form Demo</h2>
      <form className={classes.customform} onSubmit={handleSubmit}>
        {inputfields.map((input, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3 style={{ paddingTop: "1%" }}>Data for user {index + 1}</h3>
              <TextField
                name="username"
                value={input.username}
                onChange={(e) => handleFormChange(index, e)}
                className={classes.inputFields}
                label={"Enter User Name"}
              />
              <TextField
                name="email"
                type="email"
                value={input.email}
                onChange={(e) => handleFormChange(index, e)}
                className={classes.inputFields}
                label={"Enter Email"}
              />
              <TextField
                name="phonenumber"
                type="number"
                value={input.phone}
                onChange={(e) => handleFormChange(index, e)}
                className={classes.inputFields}
                label={"Enter Phone Number "}
              />
              <TextField
                name="address"
                value={input.address}
                onChange={(e) => handleFormChange(index, e)}
                className={classes.inputFields}
                label={"Enter Address "}
              />
            </div>
          );
        })}
        <Button onClick={addUsers}>
          <AddIcon /> Add More Users
        </Button>

        <Button type="submit" className={classes.inputFields}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CustomForm;

// onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
