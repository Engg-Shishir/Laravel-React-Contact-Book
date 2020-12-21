import React from 'react';
import {Link} from 'react-router-dom';

class Contact extends React.Component{
  
  delContact = (id) => {
   this.props.deleteContact(id);
  }

  render(){
    const{contact} = this.props;

    return(
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 text-center">
                   <span className="image">{contact.fullname[0]}</span>
                </div>
                <div className="col-md-2 text-center">
                  <strong>{contact.fullname}</strong>
                </div>
                <div className="col-md-4 text-center">
                  <strong>{contact.email}</strong>
                </div>
                <div className="col-md-2 text-center">
                  <strong>{contact.phone}</strong>
                </div>
                <div className="col-md-1 text-center">
                  <Link to={`/edit/${contact.id}`} className="btn btn-sm bg-warning text-dark"><strong>Edit</strong></Link>
                </div>
                <div className="col-md-1 text-center">
                  <button className="btn btn-sm btn-danger text-dark" onClick={()=> this.delContact(contact.id)}><strong>Delete</strong></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Contact;

