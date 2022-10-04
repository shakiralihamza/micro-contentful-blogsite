import React from "react";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import AuthProvider from "./src/components/Auth/AuthContext";
import { CookiesProvider } from "react-cookie";

export const wrapRootElement = ({ element }) => (<AuthProvider>
  <CookiesProvider>
    {element}
  </CookiesProvider>
</AuthProvider>);
