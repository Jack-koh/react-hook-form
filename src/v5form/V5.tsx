import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";

async function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

let renderCount = 0;

/** https://react-hook-form.com/api/useform/formstate */
export default function Watch() {
  renderCount++;

  const { register, handleSubmit, formState: {
    errors, // errors 정보
    isDirty, // default 값 변경감지: boolean
    dirtyFields, // default 값 변경감지: field
    touchedFields, // focus 감지: boolean
    isSubmitted, // submitted 감지onChange
    isSubmitting, // submit 중일때 true (비동기 포함)
    isSubmitSuccessful, // submitted 성공여부 확인
    isValid, // 모든 필드에 대한 유효성 감지: boolean , onChange 모드에서만 값을 받아볼수있다.
    isValidating, // 비동기 유효성 검사중일때 감지
  } } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = async (data: any) => {
    await sleep(3000);
  }

  console.log("isValidating", isValidating)

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            validate: async () => {
              await sleep(1000)
              return true;
            }
          })}
          placeholder="First Name" />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
}
