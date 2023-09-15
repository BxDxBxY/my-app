import { Button, Input } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegLog } from "@/Redux/actions";

function RightComponent(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [colorE, setColorE] = useState("primary");
  const [color, setColor] = useState("error");
  const [typeInput, setTypeInput] = useState("error");
  const [resetBtnLoading, setResetBtnLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorInp, setErrorInp] = useState(false);
  const regOrLog = useSelector((state) => state.regOrLog);

  const emailValidation = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/
  );
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    setResetBtnLoading(true);
    const data = new FormData(e.target);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setDisabled(true);
    // axios
    //   .post(url + "/recruiter/login", data)
    //   .then((res) => {
    //     setResetBtnLoading(false);
    //     localStorage.clear();
    //     localStorage.setItem("verify", JSON.stringify(false));
    //     localStorage.setItem("token", res?.data?.token);
    //     localStorage.setItem("companyInfo", JSON.stringify(res?.data?.data));
    //     navigate("/comprofile");
    //     setSuccessMsg("Successfull Log In");
    //     setOpenSuccess(true);
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     setResetBtnLoading(false);
    //     console.log(err);
    //     setErrorMsg(err?.message);
    //     setErrorMsg(err?.response?.data?.message);
    //     setOpenError(true);
    //     setErrorInp(true);
    //   });
  };
  const passwordValidation = /^.{6,25}$/;

  const dispatch = useDispatch();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };
  const handleForgotPassword = () => {
    console.log("Forgot Password");
  };

  const item = {
    hidden: { x: 400, opacity: 0, display: "none" },
    visible: {
      x: 0,
      display: "flex",
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="flex flex-col relative w-3/4 mx-auto items-center h-[80vh] justify-center"
      >
        <div className="flex flex-col items-center transition-all mt-[70px] md:mt-0 mb-[20px] justify-center">
          <h1 className="text-[26px] font-bold">Log in</h1>
        </div>
        <div
          style={{ rowGap: "13px" }}
          className="w-full  items-center transition-all duration-300 justify-center bg-white rounded-lg px-[30px] pt-[50px] flex-col"
        >
          <div className="flex md:flex-row flex-col w-full justify-between items-center">
            <p
              onClick={() => {
                dispatch(toggleRegLog("log"));
              }}
              className={`md:w-[50%] w-full ${
                regOrLog == "log" ? "border-[#607D8B]" : "border-transparent"
              } text-black hover:text-[#acb6c8] border-b-2 cursor-pointer transition-all duration-500 text-center py-[6px]`}
            >
              Login
            </p>
            <p
              onClick={() => {
                dispatch(toggleRegLog("reg"));
              }}
              className={`w-[50%]  border-b-2  ${
                regOrLog == "reg" ? "border-[#607D8B]" : "border-transparent"
              } text-black hover:text-[#acb6c8] transition-all duration-500 cursor-pointer text-center py-[6px]`}
            >
              Register
            </p>
          </div>
          <form
            onSubmit={handleLoginFormSubmit}
            className="mt-[20px] transition-all duration-150   flex flex-col "
          >
            <div
              className={`${
                regOrLog == "reg"
                  ? "flex opacity-100 w-auto"
                  : "w-0 h-0 overflow-hidden  opacity-0"
              } flex-col mb-[20px] transition-all duration-300`}
            >
              <label
                className="transition-all font-bold text-black"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                name="name"
                className="transition-all"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col mb-[20px]">
              <label className="font-bold text-black" htmlFor="email">
                Email
              </label>
              <Input
                placeholder="Email Address"
                type="email"
                id="email"
                value={email}
                color={colorE}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!emailValidation.test(e.target.value)) {
                    e.target.setAttribute("error", true);
                    setColorE("error");
                  } else {
                    e.target.removeAttribute("error");
                    setColorE("primary");
                  }
                }}
                required
                inputProps={{ "aria-label": "description" }}
              />
            </div>
            <div className="flex flex-col mb-[10px] relative">
              <label className="font-bold text-black" htmlFor="password">
                Password
              </label>
              <Input
                variant="standard"
                placeholder={"Password"}
                id="password"
                value={password}
                name="password"
                required
                color={color}
                type={typeInput}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!passwordValidation.test(e.target.value)) {
                    e.target.setAttribute("error", true);
                    setColor("error");
                  } else {
                    e.target.removeAttribute("error");
                    setColor("primary");
                  }
                }}
              />
              <img
                width={17}
                className={`absolute cursor-pointer right-[5px] ${" bottom-[5px] "}`}
                onClick={() => {
                  if (typeInput === "password") {
                    setTypeInput("text");
                  } else setTypeInput("password");
                }}
                height={17}
                src={
                  typeInput === "password" ? "/eyeIcon2.png" : "/eyeIcon.png"
                }
                alt="toggle input type"
              />
              {errorInp && (
                <FormHelperText
                  sx={{
                    color: "red",
                    margin: "0 0 0 auto",
                    display: "flex",
                  }}
                  className=" ml-auto"
                >
                  Incorrect email or password!
                </FormHelperText>
              )}
            </div>
            <span
              onClick={handleForgotPassword}
              className="cursor-pointer flex ml-auto text-[12px] text-[#3a6fff] mb-[50px]"
            >
              Forgot password?
            </span>
            <div className="flex pb-[40px] items-center transition-all duration-150 flex-col justify-center w-full space-y-[24px]">
              <button
                disabled={disabled}
                type="submit"
                className={`flex items-center justify-center text-center w-[200px]  ${
                  disabled
                    ? "bg-[#c2c2c2] cursor-default"
                    : "active:ring-2 ring-blue-700  shadow-blue-700 bg-blue-500 active:shadow-2xl hover:bg-blue-600"
                } rounded-md px-[15px] py-[10px] transition-all duration-150 `}
              >
                {regOrLog === "log" ? "LOGIN" : "SIGN UP"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default RightComponent;
