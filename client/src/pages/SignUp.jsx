import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/signup", data);
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const SignUp = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Create a Free Account!</h4>
        <FormRow type="text" name="name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit">Create Account</button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
