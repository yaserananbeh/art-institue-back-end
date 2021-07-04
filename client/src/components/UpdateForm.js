import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class UpdateForm extends Component {

  render() {
    return (
      <div>
        <Form onSubmit={this.props.updateTheApi}>
          <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" id = "someRandomID" placeholder={this.props.choosenPieceDesc} required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
