import React, { useState } from `react`
import './assets/css/contactlist.css'

function ContactList(props){
  const { contact , removeContact } = props;
  const contactList = contact.map((val)=>{
    return (     
      <div className="ContactList">
        <div>Name : {val.data.name}</div>
        <div>Email : {val.data.email}</div>
        <span onClick={()=>removeContact(val.id)}> Delete </span>
      </div>
      
    )
  })
  return (
    <>
      <h3 style={{marginTop:`10px`}}>Contact List</h3>
      <ul>{contactList}</ul>     
    </>
  );
}

export default ContactList;