import React, { Component } from 'react'
import Header from './components/shared/header'

import { Card, CardImg } from 'reactstrap';

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      title: 'Albuns'
    }
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        const data = res.data
        this.setState({
          pictures: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { title } = this.state

    return (
      <div>
        <Header title={title} />
      </div>
    );
  }
}

export default App;
