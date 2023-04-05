// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete user
  deleteItem({
    key: "userName",
  });

  // toast.promise({}); <-- Poderíamos usar assim no caso de um servidor back-end funcionando
  toast.success("Você deletou sua conta!");

  // return redirect
  return redirect("/");
}
