import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('lolo');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    };
  return ( 
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input value={name} onChange={handleNameChange} type="text" name="name" /> <br />

        <input type="email" name="email" /> <br />

        <input type="password" name="password" /><br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
