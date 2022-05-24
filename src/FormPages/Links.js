import React from "react";
import { BiHome, BiUser, BiData, BiLogOut } from "react-icons/bi";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useGlobalContext } from "../Auth/ContextProvider";

export const path = [
  {
    id: 1,
    url: "/homepage",
    text: "homepage",
    icon: <BiHome />,
  },
  {
    id: 2,
    url: `/profile`,
    text: "Profile",
    icon: <BiUser />,
  },
  {
    id: 3,
    url: "/userdata",
    text: "data",
    icon: <BiData />,
  },
  {
    id: 4,
    url: "/login",
    text: "Logout",
    icon: <BiLogOut />,
  },
];
