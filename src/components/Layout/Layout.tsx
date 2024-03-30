"use client";
import { useSession } from "next-auth/react";
import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import scss from "./Layout.module.scss";

const Layout = (props: any) => {
  const { data: session } = useSession();

  return (
    <div
      className={scss.layout}
      style={{ padding: session ? "0 24px 0 80px" : 0 }}
    >
      {session && <SideMenu />}
      {props.children}
    </div>
  );
};

export default Layout;
