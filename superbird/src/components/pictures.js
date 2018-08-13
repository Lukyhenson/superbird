import React, { Component } from 'react'

import '../assets/pictures'

export default class Pictures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: ''
    }
  }

  render() {
    return (
      <div className="container">
        <div className="">
          {
            pictures.map(picture => 
              <div key={picture.id}>
                <Card inverse>
                  <CardImg className="" src={picture.url} />
                </Card>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}