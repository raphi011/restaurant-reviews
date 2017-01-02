import React, { Component, PropTypes } from 'react';

import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';

import Stars from './Stars';

class ReviewForm extends Component {
  static validateAuthor(author) {
    let error = '';

    if (!author) error = 'Please provide your name.';

    return error;
  }

  static validateContent(content) {
    let error = '';

    if (!content) error = 'Please enter a review.';

    return error;
  }

  static validateStars(stars) {
    let error = '';

    if (stars === 0) error = 'Please rate the restaurant.';

    return error;
  }

  constructor(props) {
    super(props);

    this.state = this.initialState = {
      stars: 0,
      starsError: '',
      author: '',
      authorError: '',
      content: '',
      contentError: '',
    };

    this.onStarsChanged = this.onStarsChanged.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.onAuthorChanged = this.onAuthorChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { onNewReview } = this.props;

    const starsError = ReviewForm.validateStars(this.state.stars);
    const authorError = ReviewForm.validateAuthor(this.state.author);
    const contentError = ReviewForm.validateContent(this.state.content);

    if (starsError || authorError || contentError) {
      this.setState({
        starsError,
        authorError,
        contentError,
      });
      return;
    }

    onNewReview({
      author: this.state.author,
      content: this.state.content,
      stars: this.state.stars,
      added: new Date().toISOString(),
    });

    this.setState(this.initialState);
  }

  onStarsChanged(stars) {
    this.setState({
      stars,
      starsError: '',
    });
  }

  onAuthorChanged(e) {
    const author = e.target.value;

    const authorError = ReviewForm.validateAuthor(author);

    this.setState({
      author,
      authorError,
    });
  }

  onContentChanged(e) {
    const content = e.target.value;

    const contentError = ReviewForm.validateContent(content);

    this.setState({
      content,
      contentError,
    });
  }

  render() {
    return (
      <Form>
        <Header>
          <Heading>New Review</Heading>
        </Header>
        <FormFields>
          <FormField label="Author" htmlFor="author" error={this.state.authorError}>
            <TextInput id="author" onDOMChange={this.onAuthorChanged} value={this.state.author} />
          </FormField>
          <FormField label="Review" htmlFor="review" error={this.state.contentError}>
            <TextInput id="review" onDOMChange={this.onContentChanged} value={this.state.content} />
          </FormField>
          <FormField label="Stars" error={this.state.starsError} >
            <Stars size="large" style={{ margin: 'auto', align: 'center' }} stars={this.state.stars} onSelect={this.onStarsChanged} selectable />
          </FormField>
        </FormFields>
        <Footer pad={{ vertical: 'medium' }}>
          <Button
            label="Submit"
            type="submit"
            primary
            onClick={this.onSubmit}
            />
        </Footer>
      </Form >
    );
  }
}

ReviewForm.propTypes = {
  onNewReview: PropTypes.func,
};

export default ReviewForm;
