import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";


let renderCount = 0;

// https://react-hook-form.com/api/useform/trigger
export default function Trigger() {
  renderCount++;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm();

  console.log("errors", errors)

  return (
    <div>
      
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => console.log("submitted", data))}>
        <input
          {...register("firstName", { required: true, minLength: 4 })}
          placeholder="First Name" />

        <input
          {...register("lastName", { required: true, minLength: 4 })}
          placeholder="Last Name" />

        <button type="button"
          onClick={async () => {
            // trigger("firstName") // single
            // trigger(["firstName", "lastName"]) // multiple
            // const output = await trigger() // 전체
            const output = await trigger("firstName", { shouldFocus: true })
            console.log('output', output)
          }}
        >trigger</button>

        <input type="submit" />
      </form>
    </div>
  );
}
