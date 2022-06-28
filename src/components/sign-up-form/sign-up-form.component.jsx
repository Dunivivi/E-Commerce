import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      }
      console.error();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sing up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
