import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sort.css';

class Sort extends React.Component {
  state = {
    dropdown: 'off',
  }

  handleClick = () => {
    const dropdownState = this.state.dropdown === 'off' ? 'on' : 'off';
    this.setState({ dropdown: dropdownState });
  }

  render() {
    const { dropdown } = this.state;
    const dropdownState = dropdown === 'off' ? 'sort__dropdown' : 'sort__dropdown sort__dropdown-on';

    return (
      <div className="sort">
        <strong onClick={this.handleClick}>{this.props.sorted}</strong>
        <section className={dropdownState}>
          <ul>
            {this.props.notSorted.map(category => (
              <Link to={`/${category}/`} key={category}>
                {category}
              </Link>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}


export default Sort;
