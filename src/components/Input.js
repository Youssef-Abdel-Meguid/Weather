import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className='col-sm-3'></div>
            <div className="card card-body my-3 py-5 bg-info col-md-6">
              <div className="input-group px-4 col-lg-6 mx-auto">
                <input
                  type="text"
                  name='city'
                  className="form-control text-capitalize text-center bg-light"
                  placeholder="city"
                />
              </div>
              <div className="input-group px-4 col-lg-6 mx-auto">
                <input
                  type="text"
                  name='country'
                  className="form-control text-capitalize text-center bg-light"
                  placeholder="country"
                />
              </div>
              <div className="mx-auto ">
                <button className="btn btn-dark " type="submit">
                  Weather
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
