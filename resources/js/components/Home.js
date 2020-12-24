
import React from 'react';
import Axios from 'axios';
import Contact from './Contact';
import Alert from './Alert';
import $ from 'jquery';




class Home extends React.Component{

   
   state = {
     contacts:[],
     loading:true,
     message:''
   }

  fetchContact = async () => {
    const res = await Axios.get("/contact");  
    if(res.data.status === 200)
    {
      this.setState({contacts:res.data.contacts});
      this.setState({loading:false});
    }
  }
  componentDidMount()
  {
    this.fetchContact(); 
  }

  deleteContact = async (id) => {
    const res = await Axios.get(`/delete/${id}`);  
    
    if(res.data.status === 200)
    {
      this.setState({message:res.data.error});
      
      this.fetchContact();
      $('#error').css({'display':'block'});

      setTimeout(()=>{
      $('#error').css({'display':'none'});
     }, 2000);
    }
  }

  render(){

    if(this.state.loading)
    {
      return (
         <div className="container">
           <h1>Loading...</h1>
         </div>
      );
    }
    return(
      <div className="container tableshow">
      <Alert message={this.state.message} />
       {this.state.contacts.map(contact => (
         <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact}/>
       ))}
      </div>
    )
  }
}
export default Home;