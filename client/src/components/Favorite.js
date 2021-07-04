import axios from 'axios';
import React, { Component } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
import CardGroup from 'react-bootstrap/CardGroup';
import FavoriteCard from '../components/FavoriteCard';
import UpdateForm from '../components/UpdateForm';


export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritData: [],
      showUpdate: false,
      choosenPieceSlug: '',
      choosenPieceDesc: '',
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:8080/art/favorite`).then(response => {
      this.setState({
        favoritData: response.data
      });
    }).catch(error => alert(error.message));
  }
  handleDeleteFavorite = (choosenArtTitle) => {
    axios.delete(`http://localhost:8080/art/favorite/${choosenArtTitle}`).then(response => {
      console.log(response.data);
    }).then(axios.get(`http://localhost:8080/art/favorite`).then(response => {
      this.setState({
        favoritData: response.data
      });
    })).catch(error => alert(error.message));
  }
  showUpdateForm = (slug, description) => {
    // alert(slug);
    this.setState({
      showUpdate: !this.state.showUpdate,
      choosenPieceSlug: slug,
      choosenPieceDesc: description
    });
  }
  updateTheApi = (e) => {
    e.preventDefault();
    console.log(e.target.someRandomID.value);
    const reqBody = {
      description: e.target.someRandomID.value,
    };
    axios.put(`http://localhost:8080/art/favorite/${this.state.choosenPieceSlug}`, reqBody).then(response => {
      console.log(response.data);
    }).then(axios.get(`http://localhost:8080/art/favorite`).then(response => {
      this.setState({
        favoritData: response.data
      });
    })).catch(error => alert(error.message));
  }
  render() {
    return (
      <div>
        {this.state.showUpdate &&
          <UpdateForm
            choosenPieceDesc={this.state.choosenPieceDesc}
            updateTheApi={this.updateTheApi}
          />
        }
        <CardGroup>
          {this.state.favoritData.length > 0 ?
            this.state.favoritData.map((value, idx) => {
              return (
                <FavoriteCard
                  key={idx}
                  title={value.title}
                  slug={value.slug}
                  artist_name={value.artist_name}
                  description={value.description}
                  thumbnail={value.thumbnail}
                  handleDeleteFavorite={this.handleDeleteFavorite}
                  showUpdateForm={this.showUpdateForm}
                />
              );
            })
            :
            // <Spinner animation="border" variant="primary" />
            <p>no Favorits </p>
          }
        </CardGroup>
      </div>
    );
  }
}

export default Favorite;
