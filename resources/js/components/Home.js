
import React from 'react';
import Axios from 'axios';
import Contact from './Contact';

class Home extends React.Component{

  
   state = {
     contacts:[],
     loading:true,
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
      this.fetchContact();
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
      <div>
       {this.state.contacts.map(contact => (
         <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact}/>
       ))}
      </div>
    )
  }
}
export default Home;