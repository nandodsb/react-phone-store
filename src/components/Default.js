import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-uppercase pt-5">
            <h2>erro</h2>
            <h1 className="display-4" style={{fontWeight:"bold"}}>404</h1>
            <h3>
              a URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span> requerida              
              não foi encontrada
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
