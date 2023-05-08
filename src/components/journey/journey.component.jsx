import React, { useContext } from 'react';
import moment from 'moment';

import { PassListContext } from '../../pages/connection-details/connection-details.component';
import './journey.component.scss';

export default function JourneyComponent() {
  const passList = useContext(PassListContext);

  return (
    <div id="pass-list">
      {passList
          && passList.map((station, key) => (
            <div key={key} id="station">
              <div id="roadmap">
                {
                    key > 0
                    && <div className={station.departure || station.arrival ? 'journey-line' : 'journey-line journey-line-without-dot'} />
                  }
                {
                    (station.departure || station.arrival)
                    && <div id={key === 0 || key === passList.length - 1 ? 'dot-filled' : 'dot'} />
                  }
                {
                    key !== passList.length - 1
                    && <div className={station.departure || station.arrival ? 'journey-line' : 'journey-line journey-line-without-dot'} />
                  }
              </div>
              <div id="station-wrapper">
                <div className="station-time">
                  { station.arrival
                      && (
                      <>
                        <span>
                          {moment(station.arrival).format('H:mm')}
                        </span>
                        <span id="delay">
                          {
                            station.delay > 0
                            && `+ ${station.delay}min`
                          }
                        </span>
                      </>
                      )}
                </div>
                <div id="station-name">
                  {station.location.name}
                </div>
                <div className="station-time">
                  { station.departure
                      && (
                      <>
                        <span>
                          {moment(station.departure).format('H:mm')}
                        </span>
                        <span id="delay">
                          {
                            station.delay > 0
                            && `+ ${station.delay}min`
                          }
                        </span>
                      </>
                      )}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
