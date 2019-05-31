import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services';
import Quotation from '../components/Quotation';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="homepage_top">
            <h1>We design, develope, deploy and maintain</h1>
            <div className="gotocontact">
                <Link to="/contact" className="go_to_contact_page">Contact us</Link>
            </div>
        </div>
        <Services/>
        <Quotation/>
      </div>
    )
  }
}

export default HomePage
