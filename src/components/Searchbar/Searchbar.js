import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';

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
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.heandleSubmit}>
          <input
            className={styles.searchForm_input}
            type="text"
            value={this.state.query}
            onChange={this.handleChangeQuery}
          />
          <button
            type="submit"
            className={styles.searchForm_button}
            onClick={this.heandleSubmit}
          >
            <span className={styles.searchForm_button_label}>Search</span>
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
