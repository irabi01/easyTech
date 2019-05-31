import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="page_not_found_page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Page not found</h1>
                        <Link to="/" className="go_home">Back home</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound
