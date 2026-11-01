import "./Home.css"
import StepImg from "/Step Content.jpg"
export default function Home() {
  return (
    <div className="big">
    <div className="img"> 
    <img src={StepImg} alt="Step Content" />
    </div>
    <div className="section">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <label>Name</label>
           <input type="text" placeholder="e.g. Stephen King" />

            <label>Email Address</label>
            <input type="email"  placeholder="e.g. stephenking@lor"/>

            <label>Phone Number</label>
            <input type="number"  placeholder="e.g. +1 234 567 890"/>
        </form>
        <button>Next Step</button>
    </div>
    </div>
  )
}
