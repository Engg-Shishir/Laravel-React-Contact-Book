import React from 'react';
class Contact extends React.Component{
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
                  <a href="" className="btn btn-sm bg-warning text-dark"><strong>Edit</strong></a>
                </div>
                <div className="col-md-1 text-center">
                  <a href="" className="btn btn-sm btn-danger text-dark"><strong>Delete</strong></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default Contact;

