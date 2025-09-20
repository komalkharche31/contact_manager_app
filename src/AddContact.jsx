import React,{useState} from `react`;  

//write css for this component
import './assets/css/addcontact.css'


function AddContact({onFormChange}) {
  const [contactData, setContactData] = useState({
      name:"",
      email:""
  });
   const onChangeHandle = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setContactData({
          ...contactData,
          [name]: value
      })
  }
  function handleSubmit(e) {
    e.preventDefault();    
   
    if(contactData.name === "" || contactData.email === ""){
         alert("Please fill up all details")
        return;
    }
    console.log(contactData);
    onFormChange(contactData);
    setContactData({
      name:"",
      email:""
    })
  }
  return(
    <>       
    <fieldset>
        <legend>Add Contact</legend>
         <form onSubmit={handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" value={contactData.name} onChange={onChangeHandle} placeholder="Enter Name"/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="email" name="email" value={contactData.email} onChange={onChangeHandle} placeholder="Enter Email"/>
            </div>
            <button type="submit" style={{marginRight:"10px"}}>Add</button>
            <button onClick={()=>{ setContactData({name:"",email:""})}}>Clear</button>
        </form>
        
    </fieldset>
       
     
    
    </>
  )
}

export default AddContact;