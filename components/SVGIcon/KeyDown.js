import { iconDefaultProps, iconPropTypes } from './PropTypes';

const KeyDown = ({ width, height }) => (
  <svg fill="currentcolor" height={height} viewBox="0 0 24 24" width={width}>
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
  </svg>
);

KeyDown.displayName = 'Mooji.SVGIcon.KeyDown';
KeyDown.propTypes = iconPropTypes;
KeyDown.defaultProps = iconDefaultProps;

export default KeyDown;
