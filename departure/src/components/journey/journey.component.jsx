import React, { useContext } from 'react';
import { PassListContext } from '../connection-details/connection-details.component';

import './journey.component.scss';
import moment from 'moment';

export function JourneyComponent() {
  const passList = useContext(PassListContext);

    return (
      <>
        <div id='pass-list'>
          { passList &&
            passList.map((station, key) => {
              console.log(station);
              return (
                <div key={key} id='station'>
                  <div id='roadmap'>
                    <div id={key === 0 || key === passList.length -1 ? 'dot-filled':'dot'}></div>
                    {
                      key !== passList.length -1 &&
                      <div id='journey-line'></div>
                    }
                  </div>
                  <div id='station-wrapper'>
                    <div id='station-name'>
                      {station.location.name}
                    </div>
                    <div id='departure-time'>
                      { station.departure ?
                        moment(station.departure).format('H:mm') :
                        moment(station.arrival).format('H:mm')
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
