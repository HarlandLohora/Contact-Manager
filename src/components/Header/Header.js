import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
  const { title } = props;
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{title}</a>
      </div>
    </nav>
  )
};

Header.defaultProps = {
  title: "My App"
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
