"use client";

import { useState } from "react";
import { OutlinedTextInput } from "@/lib/textField";
import { CtaButton } from "@/lib/button";
import { req, sendHttpRequest } from "@/utils";
import { AuthResponse } from "@/types";

const Login = (props: { setLoggedIn: (val: boolean) => void }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<AuthResponse | null>();

  const submitLoginForm = async () => {
    setLoading(true);
    const loginData = {
      username: username,
      password: password,
    };
    const result = await sendHttpRequest("login", req.post, loginData);
    console.log(result);
    if (result.success) {
      props.setLoggedIn(true);
      setResult(result);
    } else {
      setResult(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[85vh]">
      <div className="border rounded-lg border-gray-500 shadow-lg w-[30%] mx-auto min-h-[400px] p-4">
        <OutlinedTextInput
          label="username"
          type="text"
          value={username}
          setValue={(val: string) => {
            setUsername(val);
          }}
        />
        <OutlinedTextInput
          label="password"
          type="password"
          value={password}
          setValue={(val: string) => {
            setPassword(val);
          }}
        />
        <CtaButton
          text="Login"
          onClick={() => {
            submitLoginForm();
          }}
        />
        {isLoading && <p>logging in ...</p>}
        {result?.success === false && <p>{result?.message || result?.error}</p>}
      </div>
    </div>
  );
};

export default Login;
