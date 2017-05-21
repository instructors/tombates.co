import { iconDefaultProps, iconPropTypes } from './PropTypes';

const Email = ({ width, height }) => (
  <svg fill="currentcolor" height={height} viewBox="0 0 24 24" width={width}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

Email.displayName = 'Mooji.SVGIcon.Email';
Email.propTypes = iconPropTypes;
Email.defaultProps = iconDefaultProps;

export default Email;
