import React, { Component } from 'react';

import 'grommet/grommet.min.css';

import Container from 'grommet/components/App';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

import SearchForm from './SearchForm';
import RestaurantCard from './RestaurantCard';
import Restaurant from './Restaurant';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.onClose = this.onClose.bind(this);
    this.show = this.show.bind(this);
  }

  onClose() {
    this.setState({ hidden: true });
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    const cards = [];

    for (let i = 0; i <= 10; i++) {
      cards.push(<Tile key={i} onClick={this.show}><RestaurantCard /></Tile>);
    }

    const restaurant = {
      name: 'Test Restaurant',
      comments: [
        { author: 'test1', content: 'Test Comment!!dasd' },
        { author: 'test2', content: 'Test Comment!!dasd' },
        { author: 'test3', content: 'Test Comment!!dasd' },
        { author: 'test4', content: 'Test Comment!!dasd' },
      ]
    };

    return (
      <Container>
        <Header pad="small" colorIndex="brand">
          <Title>Restaurant Reviews</Title>
        </Header>
        <Section pad="medium">
          <SearchForm />
          <Heading tag="h3" style={{ marginTop: '20px' }}>Found: </Heading>
          <Tiles size="small" selectable>{cards}</Tiles>
        </Section>
        <Layer hidden={this.state.hidden} onClose={this.onClose} closer>
          <Restaurant restaurant={restaurant} />
        </Layer>
      </Container>
    );
  }
}

export default App;
