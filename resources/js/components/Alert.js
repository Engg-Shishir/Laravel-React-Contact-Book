import React from 'react';

class Alert extends React.Component{

  render(){
    const{message} = this.props;
    return(
      <div id="success" className="alert bg-success alert-dismissible fade show mt-1" role="alert">
       {message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )

  }
}
export default Alert;

