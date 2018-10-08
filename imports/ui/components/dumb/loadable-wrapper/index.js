import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import LoadableLoading from '/imports/ui/components/dumb/loadable-loading';

//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
const LoadableWrapper = ({ loader, delay }) => (
  Loadable({
    loading: LoadableLoading,
    loader,
    delay,
  })
);

LoadableWrapper.propTypes = {
  loader: PropTypes.func.isRequired,
  delay: PropTypes.number,
};

LoadableWrapper.defaultProps = {
  delay: 300,
};

export default LoadableWrapper;
