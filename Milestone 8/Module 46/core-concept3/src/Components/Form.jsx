import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input onChange={handleNameChange} type="text" name="name" /> <br />
        <input 
        type="email" 
        onChange={handleEmailChange} 
        name="email" /> <br />

        <input
          type="password"
          onChange={handlePasswordChange}
          name="password"
        />
        <br />
        
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Form;
