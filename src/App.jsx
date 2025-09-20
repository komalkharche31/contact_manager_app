import React,{useState,useEffect} from `react`;
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import Footer from "./Footer"
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
        <Header/>
        <div className="content">
          <div className="sidebar left_sidebar"></div>
          <div className="center_content">
              <div className="item"><AddContact onFormChange={addContact}/></div>
              <div><ContactList contact = {contact} removeContact = {removeContact}/></div>
          </div>
          <div className="sidebar right_sidebar"></div>
        </div>     
        <Footer/>
      </div>
    </>
  )
}
export default App;