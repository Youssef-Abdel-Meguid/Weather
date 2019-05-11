import React, { Component } from 'react';

export default class Weather extends Component {

  render() {

    const {weatherData} = this.props;

    return (
      <div className="form-group">
          <div className="row">
            <div className='col-sm-3'></div>
            <div className="card card-body my-3 py-5 bg-danger col-md-6">
                
              <ul className='list-group'>
                <li className='list-group-item bg-success'>Tempreature: {weatherData.tempreature}</li>
                <li className='list-group-item bg-warning'>Humidity: {weatherData.humidity}</li>
                <li className='list-group-item bg-success'>City: {weatherData.city}</li>
                <li className='list-group-item bg-warning'>Country: {weatherData.country}</li>
                <li className='list-group-item bg-success text-capitalize'>Description: {weatherData.description}</li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}


/*

<ul className='list-group'>
              <li className='list-group-item'>Tempreature: {weatherData.tempreature}</li>
              <li className='list-group-item'>Humidity: {weatherData.humidity}</li>
              <li className='list-group-item'>City: {weatherData.city}</li>
              <li className='list-group-item'>Country: {weatherData.country}</li>
              <li className='list-group-item'>Description: {weatherData.description}</li>
          </ul>




 */