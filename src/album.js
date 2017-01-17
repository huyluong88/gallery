import React, { Component } from 'react'
import cars from './data'

class Album extends Component{
 render(){
   var index = parseInt(this.props.params.car) - 1
   var album = cars[index]
   return (
     <div>
        <h1>{album.make}</h1>
        <ul>
        {album.photos.map(photo => {
          return (<li><img src={photo.url}/>
              <p>{photo.desc}</p>
          </li>)
        })}
        </ul>
     </div>
   )
 }
}

export default Album
