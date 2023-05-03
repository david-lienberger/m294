import React, { useContext } from 'react';
import { PassListContext } from '../connection-details/connection-details.component';

import './journey.component.scss';

export function JourneyComponent() {
  const passList = useContext(PassListContext);

    return (
      <>
        <div id='pass-list'>
          { passList &&
            passList.map((station, key) => {
              return (
                <div key={key} id='station'>{station.location.name}</div>
              );
            })
          }
        </div>
      </>
    );

}
