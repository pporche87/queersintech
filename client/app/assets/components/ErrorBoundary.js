import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      hasError: false,
    });
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });

    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <img src="http://www.pinknews.co.uk/images/2014/01/Children-404_logo.png" />
      );
    }

    return this.props.children;
  }
}
