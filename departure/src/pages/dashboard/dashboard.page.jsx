import React from 'react';
import ConnectionsComponent from '../../components/connections/connections.component';
import SearchComponent from '../../components/search/search.component';

import './dashboard.page.scss';

export default function DashboardPage() {
  return (
    <>
      <div id='flex'>
        <div id='connections'>
          <ConnectionsComponent />
        </div>
        <div id='search'>
          <SearchComponent />
        </div>
      </div>
    </>
  );
}
