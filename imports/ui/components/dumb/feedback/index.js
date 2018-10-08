import React from 'react';
import PropTypes from 'prop-types';
import Loading from '/imports/ui/components/dumb/loading';
import Alert from '/imports/ui/components/dumb/alert';

const Feedback = ({ loading, errorMsg, successMsg }) => (
  <div>
    {loading && <Loading className="center" />}
    <Alert type="error" content={errorMsg} />
    <Alert type="success" content={successMsg} />
  </div>
);

Feedback.propTypes = {
  loading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
  successMsg: PropTypes.string,
};

Feedback.defaultProps = {
  errorMsg: '',
  successMsg: '',
};

export default Feedback;
