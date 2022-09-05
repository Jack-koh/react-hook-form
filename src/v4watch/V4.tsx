import * as React from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";

let renderCount = 0;

/** https://react-hook-form.com/api/useform/watch/ */
export default function Watch() {
  renderCount++;
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '0'
    }
  });

  // watch() // 전체 변화 감지
  // watch("firstName") // firstName 변화 감지
  // watch("firstName", "jack") // defaultValues를 정의하지 않았을때 디폴트값 넣는법

  // watch(["firstName", "lastName"]) // multiple name 변화 감지
  // const [firstName, lastName] = watch(["firstName", "lastName"])

  const firstName = watch('firstName');

  // // form data 정보 subscription 활용법 (사실상 의미없음, 위의 방법으로 이미 업데이트된 정보를 effect 없이 받아볼수있다.)
  // React.useEffect(() => {
  //   const subscription = watch((data) => {
  //     console.log(data)
  //   })
  //   return () => {
  //     subscription.unsubscribe()
  //   }
  // }, [watch])


  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />
      <p>{firstName === 'jack' ? "This is a fake one" : "wait"}</p>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("age")} placeholder="age" />
        <input type="submit" />
      </form>
    </div>
  );
}
