import { iconDefaultProps, iconPropTypes } from './PropTypes';

const EventDisabled = ({ width, height }) => (
  <svg  fill="currentcolor" height={height} viewBox="0 0 24 24" width={width}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
  </svg>
);

EventDisabled.displayName = 'Mooji.SVGIcon.EventDisabled';
EventDisabled.propTypes = iconPropTypes;
EventDisabled.defaultProps = iconDefaultProps;

export default EventDisabled;
