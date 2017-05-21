import { iconDefaultProps, iconPropTypes } from './PropTypes';

const TaskUnchecked = ({ width, height }) => (
  <svg  fill="currentcolor" height={height} viewBox="0 0 24 24" width={width}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>
);

TaskUnchecked.displayName = 'Mooji.SVGIcon.TaskUnchecked';
TaskUnchecked.propTypes = iconPropTypes;
TaskUnchecked.defaultProps = iconDefaultProps;

export default TaskUnchecked;
