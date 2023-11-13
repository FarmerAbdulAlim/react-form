import { useState } from "react"

function App() {
  const [formData, setFormData] =useState({
    username: "", 
    email: "", 
    city:"",
    gender: "Male"
  });

const inputFieldDataManage = (property, value)=> {
  setFormData(prevObj=> ({
    ...prevObj,
    [property] : value
  }))
}

const handleFormSubmit = (e)=> {
  e.preventDefault();
  console.log(formData);
}

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label className="form-label">Username</label>
            <input onChange={(e)=>{inputFieldDataManage("username", e.target.value)}} value={formData.username} type="text" className="form-control" />
          </div>
          <div>
            <label  className="form-label">Email</label>
            <input onChange={(e)=>{inputFieldDataManage("email", e.target.value)}} value={formData.email} type="email" className="form-control" />
          </div>
          <div>
            <label className="form-label">City</label>
            <select onChange={(e)=>{inputFieldDataManage("city", e.target.value)}} value={formData.city} name="" id="" className="form-select">
              <option value="">Choose</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <div className="form-check mt-2">
            <label className="form-check-label"  htmlFor="male">Male</label>
            <input onChange={(e)=>{inputFieldDataManage("gender", "Male")}} checked={formData.gender==="Male"} type="radio" name="gender" id="male" className="form-check-input"/>
            <br />
            <label className="form-check-label" htmlFor="female">Female</label>
            <input onChange={(e)=>{inputFieldDataManage("gender", "Female")}} checked={formData.gender==="Female"} type="radio" name="gender" id="female" className="form-check-input"/>
          </div>
          <button className="btn btn-primary d-block w-100">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
