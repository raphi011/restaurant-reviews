import React, { Component, PropTypes } from 'react';

import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';
import ClearOptionIcon from 'grommet/components/icons/base/ClearOption';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      cuisine: '',
    };

    this.onNameChanged = this.onNameChanged.bind(this);
    this.onCuisineChanged = this.onCuisineChanged.bind(this);
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.onClick = this.onClick.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  onNameChanged(e) {
    this.setState({ name: e.target.value });
  }

  onLocationChanged({ option }) {
    this.setState({ location: option });
  }

  onCuisineChanged({ option }) {
    this.setState({ cuisine: option });
  }

  onClick(e) {
    e.preventDefault();

    const { onSearch } = this.props;

    onSearch(this.state);
  }

  clearFilters() {
    this.setState({
      name: '',
      location: '',
      cuisine: '',
    });
  }

  render() {
    return (
      <Form style={{ width: '100%' }} >
        <Header>
          <Heading>Search</Heading>
        </Header>
        <FormFields>
          <Box direction="row" responsive>
            <FormField label="Name">
              <TextInput
                placeHolder="Search"
                onDOMChange={this.onNameChanged}
                value={this.state.name}
                />
            </FormField>
            <FormField label="Location">
              <Select
                placeHolder="Search"
                options={this.props.locations}
                onChange={this.onLocationChanged}
                value={this.state.location}
                />
            </FormField>
            <FormField label="Cuisine">
              <Select
                placeHolder="Search"
                options={this.props.cuisines}
                onChange={this.onCuisineChanged}
                value={this.state.cuisine}
                />
            </FormField>
            <Button
              label="Submit"
              type="submit"
              style={{ maxWidth: '100%' }}
              onClick={this.onClick}
              primary
              />
          </Box>
          <Button icon={<ClearOptionIcon />}
            label="Clear Filters"
            onClick={this.clearFilters}
            primary={false}
            accent={false}
            plain={true} />
        </FormFields>
      </Form >
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  locations: PropTypes.arrayOf(PropTypes.string),
  cuisines: PropTypes.arrayOf(PropTypes.string),
};

export default SearchForm;
