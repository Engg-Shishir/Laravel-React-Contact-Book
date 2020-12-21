import React from 'react';

class AddContact extends React.Component{

  state = {
    fullname:'',
    email:'',
    phone:''
  }

  handleInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <div className="container">
         <h1>Here put AddForm</h1>
      </div>
    )
  }
}

export default AddContact;