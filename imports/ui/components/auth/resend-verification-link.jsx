import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import sendVerificationEmailMutation from './graphql/mutation-send-verification-email.graphql';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
class ResendVerificationLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(evt) {
    evt.preventDefault();

    const {
      sendVerificationEmail,
      onBeforeHook,
      onServerErrorHook,
      onSucessHook,
    } = this.props;

    // Run before logic if provided and return on error
    try {
      onBeforeHook();
    } catch (exc) {
      return; // return silently
    }

    try {
      await sendVerificationEmail();
      onSucessHook();
    } catch (exc) {
      onServerErrorHook(exc);
    }
  }

  render() {
    const { text } = this.props;
    return (
      <a href="" onClick={this.handleClick}>
        {text}
      </a>
    );
  }
}

ResendVerificationLink.propTypes = {
  text: PropTypes.string.isRequired,
  sendVerificationEmail: PropTypes.func.isRequired,
  onBeforeHook: PropTypes.func,
  onServerErrorHook: PropTypes.func,
  onSucessHook: PropTypes.func,
};

ResendVerificationLink.defaultProps = {
  onBeforeHook: () => {},
  onServerErrorHook: () => {},
  onSucessHook: () => {},
};

// Apollo integration
const withMutation = graphql(sendVerificationEmailMutation, { name: 'sendVerificationEmail' });

export default withMutation(ResendVerificationLink);
