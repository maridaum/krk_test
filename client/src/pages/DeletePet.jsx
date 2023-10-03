import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/pets/${params.id}`);
  } catch (error) {
    return error;
  }
  return redirect("/dashboard");
};
