import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component{
  render(){
    return(
      <div className="footer_component">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <p><FontAwesomeIcon icon="copyright" /> {(new Date().getFullYear())}. All rights reserved. EasyTech Solution</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer