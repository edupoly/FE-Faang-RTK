import { useFormik } from "formik";
import React from "react";
import { useLoginMutation } from "./services/userService";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userslice";
import { useNavigate } from "react-router-dom";

function Login() {
  var [loginFn] = useLoginMutation();
  var navigate = useNavigate();
  var { isLoggedIn } = useSelector((state) => state.userR);
  var dispatch = useDispatch();
  var loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginFn(values).then((res) => {
        console.log(res);
        if (res.data.msg === "ok") {
          dispatch(
            updateUser({
              isLoggedIn: true,
              token: res.data.token,
              username: loginForm.values.username,
            })
          );
          navigate("/");
        }
      });
    },
  });
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={loginForm.handleSubmit}>
        <input
          type="text"
          {...loginForm.getFieldProps("username")}
          placeholder="Enter Your Username"
        />
        <br />
        <input
          type="text"
          {...loginForm.getFieldProps("password")}
          placeholder="Enter Your Password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
