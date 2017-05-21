import Fecha from 'fecha';

import { AVAILABLE, UNAVAILABLE, SOON } from '../../utils/availability';
import { parseDateWithHyphen } from '../../utils/parseDate';

import { SVGIcon } from '../';

const renderAvailabilityBanner = ({ isAvailable, available_on }) => {
  switch (isAvailable) {
    case AVAILABLE:
      return (
        <div className='availability__banner'>
          <SVGIcon>
            <SVGIcon.AlarmOn />
          </SVGIcon>
          <span>
            Currently accepting new projects.
          </span>
        </div>
      )
    case SOON:
      return (
        <div className='availability__banner'>
          <SVGIcon>
            <SVGIcon.Schedule />
          </SVGIcon>
          <span>
            Currently accepting projects for { Fecha.format(parseDateWithHyphen(available_on), 'MMM YYYY')}
          </span>
        </div>
      )
    default:
      return (
        <div className='availability__banner'>
          <SVGIcon>
            <SVGIcon.AlarmOff />
          </SVGIcon>
          <span>
            Currently not accepting new projects.
          </span>
        </div>
      )
  }
}

export const Availability = ({ availability }) => {
  return (
    <div className='availability'>
      {renderAvailabilityBanner(availability)}
      <style jsx>{`
        .availability {
          display: block;
          padding: 18px 64px;
          border-bottom: 1px solid #1d192f;
          transition: padding 300ms ease-in-out;
        }

        .availability > :global(.availability__banner) {
          display: flex;
          align-items: center;
        }

        .availability > :global(.availability__banner) :global(.icon) {
          margin-right: 12px;
          color: #524A75;
        }

        .availability > :global(.availability__banner) :global(span) {
          color: #FFF;
        }

        @media (max-width: 800px) {
          .availability {
            padding: 18px 24px;
          }
        }
      `}</style>
    </div>
  )
}

export default Availability;
