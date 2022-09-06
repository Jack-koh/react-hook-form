import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";


let renderCount = 0;

export default function SetValue() {
  renderCount++;

  const { register, handleSubmit, setValue, formState: {
    isDirty, dirtyFields,
    touchedFields,
    errors,
    isValid
  } } = useForm({
    mode: 'onChange',
    defaultValues: {
      yourDetails: {
        firstName: '',
        lastName: ''
      }
    }
  });

  // console.log("isDirty, dirtyFields", isDirty, dirtyFields);
  // console.log("touchedFields", touchedFields)
  console.log("errors", errors)
  console.log(isValid)


  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit((data) => console.log("submitted", data))}>
        <input {...register("yourDetails.firstName", { minLength: 6, required: true })} placeholder="First Name" />

        <input {...register("yourDetails.lastName", { minLength: 6, required: true })} placeholder="Last Name" />

        <button type="button" onClick={() => {
          // setValue 함수는 formState 상태가 감지하지 못한다.
          // setValue('yourDetails.firstName', "Jack", { shouldDirty: true }) // value 변경시 dirty 감지옵션
          // setValue('yourDetails.firstName', "Jack", { shouldTouch: true }) // touched 된 필드 갑지 옵션
          // setValue('yourDetails.firstName', "Jack", { shouldValidate: true }) // validation 감지
          setValue('yourDetails', {
            firstName: "Jack",
            lastName: 'Koh'
          }) // object 형식으로 필드값 채우기
        }}>setValue</button>

        <input type="submit" />
      </form>
    </div>
  );
}
