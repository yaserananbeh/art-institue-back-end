import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import CardGroup from 'react-bootstrap/CardGroup';
import ArtCard from '../components/ArtCard';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artData: []
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/art`).then(response => {
      this.setState({
        artData: response.data,
      });
    }).catch(error => alert(error.message));
  }
  handleAddToFavorit=(pieceData)=>{
    const {title,artist_name,description,thumbnail}=pieceData;
    // console.log(title,artist_name,description,thumbnail);
    const reqBody={
      title:title,
      thumbnail:thumbnail,
      artist_name:artist_name,
      description:description
    };
    console.log(reqBody);
    axios.post(`http://localhost:8080/art/favorite`,reqBody).then(response=>{
      if(response.data==='Data already Exist'){
        alert('Art already Exist in your fovorite');
      }
      else{
        console.log(response.data);
        alert('added your favorite');
      }
    }).catch(error=>alert(error.message));

  }
  render() {
    return (
      <div>
        <CardGroup>
          {this.state.artData.length > 0 ?
            this.state.artData.map((value,idx) => {
              return (
                <ArtCard
                  key={idx}
                  title={value.title}
                  artist_name={value.artist_name}
                  description={value.description}
                  thumbnail={value.thumbnail}
                  handleAddToFavorit={this.handleAddToFavorit}
                />
              );
            })
            : <Spinner animation="border" variant="primary" />}
        </CardGroup>
      </div>
    );
  }
}

export default Main;
