import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Quotation extends Component {
    render() {
        return (
            <div>
                <div className="quotation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wrap_quotation">
                                    <div>
                                        <h1>You have a project?</h1>
                                    </div>
                                    <div className="quotation_contact">
                                        <Link to="/contact" className="contact_us_quotation">Contact us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quotation
