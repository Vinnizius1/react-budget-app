import React from "react";
/* O envio dos dados da tela inicial "Intro" será para este componente "Dashboard",
porque é aqui onde ele é chamado.
Nesse envio do Form, um objeto "request" é passado, por isso já o desestruturamos no argumento da função
pegarmos todos os dados que precisamos.
*/

// library imports
import { toast } from "react-toastify";

// react router dom imports
import { useLoaderData } from "react-router-dom";

// components
import Intro from "../components/Intro";

// helper functions
import { fetchData } from "../helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  try {
    const formData = Object.fromEntries(data);
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account.");
  }
}

function Dashboard() {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}

export default Dashboard;
