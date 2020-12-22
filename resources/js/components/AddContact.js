import React from 'react';
import axios from 'axios';

class AddContact extends React.Component{

  state = {
    fullname:'',
    email:'',
    phone:''
  }

  handleInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  saveContact = async (e) =>{ 
    e.preventDefault();
    const res = await axios.post("/contact", this.state);
    this.setState({fullname:'',email:'',phone:''});
    if(res.data.status === 200)
    {
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="card mt-5">
              <div className="card-header text-center">
                <span className="text-danger h3">Add Contact</span>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveContact}>
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
        </div>
      </div>
    )
  }
}

export default AddContact;