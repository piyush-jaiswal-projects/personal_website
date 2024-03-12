"use client";

import AdminPanel from "./adminPanel";
import Login from "./login";
import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <div className="text-center">
      {isLoggedIn === false && (
        <Login
          setLoggedIn={(v: boolean) => {
            setLoggedIn(v);
          }}
        />
      )}
      {isLoggedIn && <AdminPanel />}
    </div>
  );
}
