import { Button, Input } from "@material-tailwind/react";
import React, { useEffect } from "react";
 
export function InputWithButton({setValue}) {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  // useEffect(()=>{
  //   setValue(email);
  // },[])
 
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={(e) => {setValue(e.target.value); setEmail(e.target.value)} }
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button 
        size="sm"
        color={email ? "white" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
}