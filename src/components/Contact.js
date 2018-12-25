import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Contact extends Component{
  render(props){
    const { name, email, phone } = this.props;
    return(
      <div>
        <h2>{name}</h2>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.defaultProps = {
  name : "User",
  email: "example@email.com",
  phone: "55-5555-5555"
}
Contact.propTypes = {
  name : PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
}

export default Contact;
