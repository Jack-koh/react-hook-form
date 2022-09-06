import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";


let renderCount = 0;

// https://react-hook-form.com/api/useform/reset
export default function Reset() {
  renderCount++;

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState,
    formState: { isDirty, isSubmitSuccessful }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  console.log('isDirty', isDirty)

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(
        { firstName: 'Jack', lastName: "Koh" },
        { keepDefaultValues: true }
      )
    }
  }, [isSubmitSuccessful, reset])

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => console.log("submitted", data))}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />

        <button type="button" onClick={() => {
          console.log(getValues())
          reset({ ...getValues(), lastName: 'Koh' })
        }}>reset</button>

        {/* <button type="button" onClick={() => {
          reset(
            { firstName: 'Jack', lastName: "Koh" },
            { keepDefaultValues: true })
          // keepDefaultValues: reset시 defaultValues값과 다르면 dirty 변경으로 감지
          // default 값과 같으면 dirty: false
        }}>reset</button> */}

        <input type="submit" />
      </form>
    </div>
  );
}
