"use client";
import Button from "@mui/material/Button";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }

  return (
    <>
      <div>
        <Button
          variant={"contained"}
          color={"success"}
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </div>
    </>
  );
};

export default Login;
