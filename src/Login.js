import React,{ useState }  from "react";

const Login = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        businessName: "",
        contactNumber: "",
        email: "",
        address: "",
      });
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h2>Welcome </h2>
    </div>
  );
};

export default Login;
