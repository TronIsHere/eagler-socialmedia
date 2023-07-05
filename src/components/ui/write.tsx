import { faImage,faVideo,faSmile,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useRef, useState } from "react";

// interface props {
//     color?:any
//    }

const WriteComponent:FC = ()=>{
  const [value, changeValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
    return(
        <div className="border-b-2 border-whiteGray  p-5  ">
    <textarea  ref={textAreaRef} value={value} rows={4} onChange={(e)=>{changeValue(e.target.value)}} placeholder='Share your thoughts...' className='bg-secondary w-full focus:outline-none text-second-accent text-xl ' />
    <div className="flex mt-8 justify-between">
    <div className="flex ">
    <FontAwesomeIcon icon={faImage} className="text-low-color-accent cursor-pointer hover:text-white"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faVideo} className="text-low-color-accent cursor-pointer ml-4 hover:text-white"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faSmile} className="text-low-color-accent cursor-pointer ml-4 hover:text-white"></FontAwesomeIcon>
    </div>
    <button className='bg-red-600 text-white px-3 py-2 rounded-full -mt-4 hover:opacity-50'><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
    </div>
  </div>
    )
}

export default WriteComponent;