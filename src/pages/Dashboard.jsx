import React from "react";

// react router dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

function Dashboard() {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default Dashboard;
