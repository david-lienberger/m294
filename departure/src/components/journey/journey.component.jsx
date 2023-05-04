import React, { useContext } from 'react';
import { PassListContext } from '../connection-details/connection-details.component';

import './journey.component.scss';
import moment from 'moment';

export function JourneyComponent() {
  const passList = useContext(PassListContext);

  return (
    <>
      <div id='pass-list'>
        {passList &&
          passList.map((station, key) => {
            return (
              <div key={key} id='station'>
                <div id='roadmap'>
                  {
                    key > 0 &&
                    <div className={station.departure || station.arrival ? 'journey-line':'journey-line journey-line-without-dot'}></div>
                  }
                  {
                    (station.departure || station.arrival) &&
                    <div id={key === 0 || key === passList.length - 1 ? 'dot-filled' : 'dot'}></div>
                  }
                  {
                    key !== passList.length - 1 &&
                    <div className={station.departure || station.arrival ? 'journey-line':'journey-line journey-line-without-dot'}></div>
                  }
                </div>
                <div id='station-wrapper'>
                  <div className='station-time'>
                    { station.arrival &&
                      <>
                        <span>
                          {moment(station.arrival).format('H:mm')}
                        </span>
                        <span id='delay'>
                          {
                            station.delay > 0 &&
                            `+ ${station.delay}min`
                          }
                        </span>
                      </>
                    }
                  </div>
                  <div id='station-name'>
                    {station.location.name}
                  </div>
                  <div className='station-time'>
                    { station.departure &&
                      <>
                        <span>
                          {moment(station.departure).format('H:mm')}
                        </span>
                        <span id='delay'>
                          {
                            station.delay > 0 &&
                            `+ ${station.delay}min`
                          }
                        </span>
                      </>
                    }
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );

}
