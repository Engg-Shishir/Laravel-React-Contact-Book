import React from 'react';
import axios from 'axios';

class EditContact extends React.Component{

  state = {
    id:'',
    fullname:'',
    email:'',
    phone:''
  }

  handleInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  updateContact = async (e) =>{ 
    e.preventDefault();

    const res = await axios.post("/update", this.state);
    this.setState({fullname:'',email:'',phone:''});
    if(res.data.status === 200)
    {
      this.props.history.push("/");
    }
  }
  
  async componentDidMount()
  {
    const id = this.props.match.params.id;
    const res = await axios.get(`/edit/${id}`);
    this.setState({id:id});
    this.setState({fullname: res.data.contact.fullname});
    this.setState({email: res.data.contact.email});
    this.setState({phone: res.data.contact.phone});
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="card">
              <div className="card-header">
                <span></span>
              </div>
              <div className="card-body">
                <form onSubmit={this.updateContact}>
                  <input type="hidden" value={this.state.id} name="id" />
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
                    <input type="submit"className="btn btn-info form-control" value="Update Contact"/>
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

export default EditContact;