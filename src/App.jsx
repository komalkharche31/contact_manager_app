import React,{useState,useEffect} from `react`;
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './assets/css/styles.css'

function App() {
    const LocalStorageKey = `contact`
  const [ contact , setContact] = useState(()=>{
      return JSON.parse(localStorage.getItem(LocalStorageKey)) || [];
  })


  useEffect(()=>{
      localStorage.setItem(LocalStorageKey,JSON.stringify(contact));
  },[contact])
  
  const addContact = (data) => {
    console.log("breakpoint in App",data);
    setContact([...contact,{
        id:Math.random(), 
        data
    }])
  }
  
  const removeContact = (id) =>{
      const updateList = contact.filter((val)=>{
        return val.id !== id;
      })
    setContact(updateList)
  }
  return(
    <>   
      <div className="container">  
        <div className="header">Header</div>
        <div className="content">
          <div className="sidebar left_sidebar">left Sidebar</div>
          <div className="center_content">
              <div className="item"><AddContact onFormChange={addContact}/></div>
              <div><ContactList contact = {contact} removeContact = {removeContact}/></div>
          </div>
          <div className="sidebar right_sidebar">Right Sidebar</div>
        </div>     
        <div  className="footer">Footer</div>        
      </div>
    </>
  )
}
export default App;