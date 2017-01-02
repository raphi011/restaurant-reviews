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
import { getAll } from '../localStorage';

function uniqueValues(list) {
  return [...new Set(list)];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      restaurants: [],
      locations: [],
      cuisines: [],
    };

    this.onSearch = this.onSearch.bind(this);
    this.onClose = this.onClose.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    getAll().then((restaurants) => {
      this.setState({
        restaurants,
        cuisines: uniqueValues(restaurants.map(r => r.cuisine)),
        locations: uniqueValues(restaurants.map(r => r.address.city)),
      });
    });
  }

  onSearch(search) {
    if (
      !search.name &&
      !search.cuisine &&
      !search.location) {
      getAll().then((restaurants) => {
        this.setState({ restaurants });
      });
      return;
    }

    getAll().then((restaurants) => {
      const found = restaurants.filter(r => (
        (!search.cuisine || r.cuisine === search.cuisine) &&
        (!search.name || r.name.includes(search.name)) &&
        (!search.location || r.address.city === search.location)
      ));

      this.setState({
        restaurants: found,
      });
    });
  }

  onClose() {
    this.setState({ hidden: true });
  }

  show(r) {
    this.setState({
      hidden: false,
      selected: r,
    });
  }

  render() {
    const cards = this.state.restaurants.map((r, i) => (
      <Tile key={i} onClick={() => this.show(r)}><RestaurantCard restaurant={r} /></Tile>
    ));

    const layer =
      this.state.hidden ?
        undefined :
        (
          <Layer onClose={this.onClose} closer>
            <Restaurant restaurant={this.state.selected} />
          </Layer>
        );

    return (
      <Container >
        <Header pad="small" colorIndex="brand">
          <Title>Restaurant Reviews</Title>
        </Header>
        <Section pad="medium">
          <SearchForm
            onSearch={this.onSearch}
            locations={this.state.locations}
            cuisines={this.state.cuisines}
            />
          <Heading tag="h3" style={{ marginTop: '20px' }}>Found: </Heading>
          <Tiles fill selectable size="medium">{cards}</Tiles>
        </Section>
        {layer}
      </Container >
    );
  }
}

export default App;
