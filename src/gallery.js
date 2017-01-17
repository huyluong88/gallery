import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import cars from './data'


class Gallery extends Component {
  constructor (){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <ul>
              <div>
              {cars.map((album, index) => {
                return (
                  <li key={index}><Link to={`/album/${index+1}`} activeStyle={{ color: 'blue' }}>
                      <img className="home" src={album.photos[1].url}/>
                      {album.make}
                    </Link></li>)
              })}
              </div>
          </ul>
      </div>
    );
  }

}

export default Gallery
