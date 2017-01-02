import React from 'react';

import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const SearchForm = () => (
  <Form style={{ width: '100%' }} >
    <Header>
      <Heading>Search</Heading>
    </Header>
    <FormFields>
      <Box direction="row" responsive>
        <FormField label="Name">
          <TextInput placeHolder="Search" />
        </FormField>
        <FormField label="Location">
          <Select
            placeHolder="Search"
            options={['Vienna', 'New York', 'Paris']}
            />
        </FormField>
        <FormField label="Cuisine">
          <Select
            placeHolder="Search"
            options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
            value={undefined}
            />
        </FormField>
        <Button
          label="Submit"
          type="submit"
          style={{ maxWidth: '100%' }}
          primary
          />
      </Box>
    </FormFields>
  </Form >
);

export default SearchForm;
