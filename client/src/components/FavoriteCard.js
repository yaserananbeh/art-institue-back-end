import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class FavoriteCard extends Component {
  render() {
    return (
      // <div>
      <Card style={{ width: '400px', minHeight: '300px' }}>
        <Card.Img variant="top" style={{ maxWidth: '100%', height: '300px' }} src={this.props.thumbnail} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.artist_name}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Button variant="primary" onClick={() => this.props.handleDeleteFavorite(this.props.slug)}>remove from the favorite</Button>
          <Button variant="primary" onClick={() => this.props.showUpdateForm(this.props.slug,this.props.description)}>Edit the item</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      // </div>
    );
  }
}

export default FavoriteCard;
