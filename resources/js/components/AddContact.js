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
        <div className="card">
          <div className="card-header">
            <span></span>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
               <label htmlFor="fullname"></label>
               <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleInput} placeholder="Enter your Full name" required className="form-control" />
              </div>
              <div className="form-group">
               <label htmlFor="email"></label>
               <input type="text" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Enter your email" required className="form-control" />
              </div>
              <div className="form-group">
               <label htmlFor="phone"></label>
               <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} placeholder="Enter your phone" required className="form-control"/>
              </div>
              <div className="form-group">
                <input type="submit"className="btn btn-info form-control" value="Add Contact"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact;