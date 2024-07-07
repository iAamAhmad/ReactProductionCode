import { useState } from "react"
import { useForm } from "react-hook-form";
const FormFieldCustom = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    profession: '',
    gender: '',
    languages: []
  })

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const updateLang = checked ?
          [...prevData.languages, value] :
          prevData.languages.filter((lang) => lang !== value);

        return {
          ...prevData, [name]: updateLang
        }
      })
    }
    else {
      setFormData({
        ...formData,
        [name]: value
      }
      )
    }

  }
  const onSubmithandler = (data) => {
    console.log("FormData : ", data);
  };
  return (
    <>
      <h1 className="font-bold">A Custom Field</h1>
      <form action="" className="m-2" onSubmit={handleSubmit(onSubmithandler)}>
        <div className="">
          <label htmlFor="fname">UserName</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="text"
            id="fname"
            name="userName"
            {...register('userName', { required: "Name is required" })}
          />
          {errors && errors.fname && <span className="text-blue-600">This field is required</span>}
        </div>
        <div className="">
          <label htmlFor="email">Email</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="text"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors && errors.email && <span className="text-blue-600">This field is required</span>}
        </div>
        <div className="">
          <label htmlFor="gender">Male</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="radio"
            id="gender"
            name="gender"
            value={"Male"}
            {...register("gender", { required: "gender is required" })}
          />
          {errors && errors.gender && <span className="text-blue-600">This field is required</span>}

        </div>
        <div className="">
          <label htmlFor="gender">female</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="radio"
            id="gender"
            name="gender"
            value={"Female"}
            {...register("gender", { required: "gender is required" })}
          />
          {errors && errors.gender && <span className="text-blue-600">This field is required</span>}

        </div>
        <div className="flex gap-2">
          <label htmlFor="languages">Urdu</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="checkbox"
            id="languages"
            name="languages"
            value={"Urdu"}
            {...register("languages", { required: "gender is required" })}
          />
          {errors && errors.languages && <span className="text-blue-600">This field is required</span>}

        </div>
        <div className="flex gap-2">
          <label htmlFor="languages">English</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="checkbox"
            id="languages"
            name="languages"
            value={"English"}
            {...register("languages", { required: "gender is required" })}
          />
          {errors && errors.languages && <span className="text-blue-600">This field is required</span>}

        </div>
        <div className="flex gap-2">
          <label htmlFor="languages">German</label><br />
          <input
            className="border p-2"
            onChange={onChangeHandler}
            type="checkbox"
            id="languages"
            name="languages"
            value={"German"}
            {...register("languages", { required: "gender is required" })}

          />
          {errors && errors.languages && <span className="text-blue-600">This field is required</span>}

        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default FormFieldCustom
