import { iconDefaultProps, iconPropTypes } from './PropTypes';

const TaskDisabled = ({ width, height }) => (
  <svg  fill="currentcolor" height={height} viewBox="0 0 24 24" width={width}>
    <clipPath id="b">
      <path d="M0 0h24v24H0z" id="a"/>
    </clipPath>
    <path clipPath="url(#b)" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/>
  </svg>
);

TaskDisabled.displayName = 'Mooji.SVGIcon.TaskDisabled';
TaskDisabled.propTypes = iconPropTypes;
TaskDisabled.defaultProps = iconDefaultProps;

export default TaskDisabled;
