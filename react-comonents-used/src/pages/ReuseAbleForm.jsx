import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../components/FormField/ReuseInput';


const FormFieldCustom = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    profession: '',
    gender: '',
    languages: [],
  });

  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const updateLang = checked
          ? [...prevData.languages, value]
          : prevData.languages.filter((lang) => lang !== value);

        return {
          ...prevData,
          languages: updateLang,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmithandler = (data) => {
    console.log('FormData : ', data);
  };

  return (
    <>
      <h1 className="font-bold">A Custom Field</h1>
      <form className="m-2" onSubmit={handleSubmit(onSubmithandler)}>
        <InputField
          label="UserName"
          name="userName"
        
          onChange={onChangeHandler}
          register={register}
          requiredMessage="Name is required"
          error={errors.userName}
        />
        <InputField
          label="Email"
          name="email"
       
          onChange={onChangeHandler}
          register={register}
          requiredMessage="Email is required"
          error={errors.email}
        />
        <div>
          <label className="font-bold">Gender</label>
          <div>
            <InputField
              label="Male"
              type="radio"
              name="gender"
              value="Male"
              onChange={onChangeHandler}
              
              register={register}
              requiredMessage="Gender is required"
              error={errors.gender}
            />
            <InputField
              label="Female"
              type="radio"
              name="gender"
              value="Female"
              onChange={onChangeHandler}
              
              register={register}
              requiredMessage="Gender is required"
              error={errors.gender}
            />
          </div>
        </div>
        <div>
          <label className="font-bold">Languages</label>
          <div className="flex gap-2">
            <InputField
              label="Urdu"
              type="checkbox"
              name="languages"
              value="Urdu"
              onChange={onChangeHandler}
              
              register={register}
              requiredMessage="Languages are required"
              error={errors.languages}
            />
            <InputField
              label="English"
              type="checkbox"
              name="languages"
              value="English"
              onChange={onChangeHandler}
            
              register={register}
              requiredMessage="Languages are required"
              error={errors.languages}
            />
            <InputField
              label="German"
              type="checkbox"
              name="languages"
              value="German"
              onChange={onChangeHandler}
             
              register={register}
              requiredMessage="Languages are required"
              error={errors.languages}
            />
          </div>
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormFieldCustom;
