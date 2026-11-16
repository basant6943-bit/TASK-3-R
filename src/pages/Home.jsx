
import "./Home.css"
import StepImg from "/Step Content.jpg"
import {useState,useRef} from "react"
export default function Home() {
  const [name,setname] = useState("")

  const handleNameChange =(e)=>{
      console.log(e.target.value)
    setname (e.target.value)
  
  }

  const [email,setemail] = useState("")

  const handleEmailChange =(e)=>{
      console.log(e.target.value)
    setemail (e.target.value)
  
  }

  const [phone,setphone] = useState("")

  const handlePhoneChange =(e)=>{
      console.log(e.target.value)
    setphone (e.target.value)
  }
  const [Country,setCountry]= useState("")

 const handleCountryChange =(e)=>{
    console.log(e.target.value)
  setCountry(e.target.value)
  }
const nameRef = useRef(null);
const emailRef = useRef(null);
const phoneRef = useRef(null);
const selectRef = useRef(null);

const [step,setStep] = useState(1)
const onNext = () => {
  if (step === 1) {
    emailRef.current.focus();
    setStep(2);
  } else if (step === 2) {
    phoneRef.current.focus(); 
    setStep(3);
  }
   else if(step === 3){
     selectRef.current.focus(); 
     setStep (4)
   }
  else{
    nameRef.current.focus(); 
    setStep(1);
  }
};
  return (
    <div className="bg-[#eef1f4] flex justify-center items-center h-screen  text-[#022959]"> 

    <div className="flex justify-center  py-12.5 px-10 m-7.5 rounded-[20px] gap-7.5 w-1/2  bg-[#FFFFFF]">

    <div> 
    <img src={StepImg} alt="Step Content" />
    </div>
    <div>
        <h1 className="font-bold leading-[120%]">Personal info</h1>

        <p className="font-bold text-base leading-normal text-[#9699AA] ">Please provide your name, email address, and phone number.</p>

        <form className="flex flex-col">
          <label>Name</label>
           <input className=" w-112.5 h-12 opacity-100 gap-2 rounded-8 border border-[#D6D9E6] pt-2 pr-4 pb-2 pl-4 m-2.5 font-bold text-[16px] leading-[120%] tracking-0 text-[#000000]"  ref={nameRef} type="text" onChange={handleNameChange} value ={name}  placeholder="e.g. Stephen King" />

            <label>Email Address</label>
            <input  className=" w-112.5 h-12 opacity-100 gap-2 rounded-8 border border-[#D6D9E6] pt-2 pr-4 pb-2 pl-4 m-2.5 font-bold text-[16px] leading-[120%] tracking-0 text-[#000000]" ref={emailRef} type="email" onChange={handleEmailChange} value ={email}  placeholder="e.g. stephenking@lor"/>
            <label>Phone Number</label>
            <input className=" w-112.5 h-12 opacity-100 gap-2 rounded-8 border border-[#D6D9E6] pt-2 pr-4 pb-2 pl-4 m-2.5 font-bold text-[16px] leading-[120%] tracking-0 text-[#000000]"  ref={phoneRef} type="number"  onChange={handlePhoneChange} value ={phone}  placeholder="e.g. +1 234 567 890"/>
            <select ref={selectRef} onChange={handleCountryChange}>
              <option>Egypt</option>
              <option>Palestine</option>
              <option>Saudi Arabia</option>
              <option>Turkey</option>
              <option>Italy</option>
              <option>India</option>
              <option>Japan</option>
              <option>Brazil</option>
            </select>
                 <h3>Country:{Country}</h3>
        </form>
        <button className="w-30.75  rounded-[10px] pt-4 pr-6 pb-4 pl-6 ml-85 cursor-pointer text-[#ffffff] bg-[#022959]" onClick={onNext}>Next Step</button>


    </div>
    </div>
     </div>
  )
}
