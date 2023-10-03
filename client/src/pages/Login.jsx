import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import kino from "../assets/images/logo.svg";
import { FormRow } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Login = () => {
  return (
    <Wrapper>
      <div className="form-container">
        <img src={kino} />
        <Form method="post" className="form">
          <h1>Welcome Back!</h1>
          <FormRow type="email" name="email" labelText="Email" />
          <FormRow type="password" name="password" labelText="Password" />
          <small>Forgot your password?</small>
          <button type="submit">Login</button>
          <p>
            Already a member?
            <Link to="/signup" className="member-btn">
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
