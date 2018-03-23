import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sort.css';

class Sort extends React.Component {
  state = {
    dropdown: 'off',
  }

  openDropdownClick = () => {
    const dropdownState = this.state.dropdown === 'off' ? 'on' : 'off';
    this.setState({ dropdown: dropdownState });
  }

  render() {
    const { dropdown } = this.state;
    const { sortedTitle, notSorted, newSelection } = this.props;
    const dropdownState = dropdown === 'off' ? 'sort__dropdown' : 'sort__dropdown sort__dropdown-on';

    return (
      <div className="sort">
        <strong onClick={this.openDropdownClick}>{sortedTitle}</strong>
        <section className={dropdownState}>
          <ul onClick={this.openDropdownClick}>
            {notSorted.map(category => {
              const linkHome = category === 'popular' ? '/' : `${category}`
              const linkPrev = category === 'popular' ? 
                `/${category}/${this.props.day}` : 
                `/${category}/${this.props.day}`
              const link = this.props.day === 0 ? linkHome : linkPrev
            return( 
              <Link to={link} onClick={() => newSelection(sortedTitle, category)} key={category}>
                {category}
              </Link>
            )})}
          </ul>
        </section>
      </div>
    );
  }
}


export default Sort;
