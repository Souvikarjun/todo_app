import { inputProps } from "../types/types"


const Input = ({name, type, placeholder, value} : inputProps) => {
  return (
    <input name={name} type={type} placeholder={placeholder} value={value} 
        className="black w-full p-3 mx-2 boarder rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
    />
  )
}

export default Input