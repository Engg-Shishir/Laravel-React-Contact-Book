import React from 'react';

class Alert extends React.Component{

  render(){
    const{message} = this.props;
    return(
      <>
      <div id="success" className="alert bg-success alert-dismissible fade show mt-1 text-center" role="alert">
       <strong>{message}</strong>
      </div>
      <div id="error" className="alert bg-danger alert-dismissible fade show mt-1 text-center" role="alert">
       <strong>{message}</strong>
{/*         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <strong><span aria-hidden="true">&times;</span></strong> 
        </button> */}
      </div>
      </>
    )

  }
}
export default Alert;

