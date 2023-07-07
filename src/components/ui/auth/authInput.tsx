import { Field, FieldHookConfig, useField } from "formik";
import { FC } from "react";
interface myProps{
    type?:string,
    label:string,
    labelClass?:string,
    name:string
}
const AuthTextInput:FC<myProps> = ({type,label,labelClass,name})=>{
    const [field,meta] = useField(name);
    return(
    <div>
      <p className={`text-second-accen ${labelClass}`}>{label}</p>
      <input {...field} name={name} type={type || 'text'} className="w-full mt-3  border rounded-md h-10 pl-2 focus:outline-none border-slightGray bg-secondary"></input>
     
      {meta.touched ?? meta.error ? <p className="mt-2 text-red-500">{meta.error}</p> : null}
        </div>
    );
}

export default AuthTextInput;