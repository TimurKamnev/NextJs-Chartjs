"use client";
import React from "react";
import Dashboard from "./dashboard/page";
import { useSession } from "next-auth/react";
import scss from "./Home.module.scss";
import Login from "@/components/Login/Login";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <main className={scss.main}>
        {session && <Dashboard />}
        {!session && <Login />}
      </main>
    </>
  );
};

export default Home;
