import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap/'

 class ShowDigimon extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} key={this.props.idx}>
  <Card.Img variant="top" src={this.props.img} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      {this.props.level}
    </Card.Text>
    <Button variant="primary" onclick={this.props.addFav}>add to fav</Button>
  </Card.Body>
</Card>
        )
    }
}

export default ShowDigimon
