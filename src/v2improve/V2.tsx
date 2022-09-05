import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Headers from "./Header";

let renderCount = 0;


type FormValues = {
  name: string,
  age: string,
  yourDetails: { firstName: '' }
  pets: { name: string }[]
}

export default function V2() {
  renderCount++;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      name: '',
      age: "",
      yourDetails: { firstName: '' },
      pets: []
    }
  });

  const { fields, append, prepend } = useFieldArray({ control, name: 'pets' })


  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <input {...register("name", {
          required: "First name is required."
        })} placeholder="First Name" />
        <p>{errors?.name?.message}</p>

        <input {...register("yourDetails.firstName", {
          required: "First name is required.",
        })} placeholder="First Name" />
        <p>{errors?.yourDetails?.firstName?.message}</p>

        <input {...register("age", {
          required: "Please enter your age.",
          valueAsNumber: true, max: 5
        })} placeholder="Age" type="number" />
        <p>{errors?.age?.message}</p>

        <div>
          {fields.map((field, index) => {
            return <input key={field.id} {...register(`pets.${index}.name`, { required: true })} />
          })}
        </div>

        <button type="button" onClick={() => { append({ name: 'append' }) }}>append</button>
        <button type="button" onClick={() => { prepend({ name: 'prepend' }) }}>preppend</button>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
