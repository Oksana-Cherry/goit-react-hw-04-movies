import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeQuery = event => {
    this.setState({ query: event.target.value });
  };

  heandleSubmit = event => {
    event.preventDefault();
    //  console.log(this.state);
    if (this.state.query !== '') {
      this.props.onSubmit(this.state.query);
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.heandleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            onChange={this.handleChangeQuery}
          />
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.heandleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.protoType = {
  heandleSubmit: PropTypes.func,
  handleChangeQuery: PropTypes.func,
};

export default Searchbar;
