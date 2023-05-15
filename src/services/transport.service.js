import axios from 'axios';

export default class TransportService {
  getConnection(from, to) {
    return axios.get(`https://transport.opendata.ch/v1/connections?from=${from}&to=${to}&limit=5`);
  }

  getConnectionByTime(from, to, time) {
    return axios.get(`https://transport.opendata.ch/v1/connections?from=${from}&to=${to}&time=${time}&limit=5`);
  }

  getStationInformation(xCoordination, yCoordination) {
    return axios.get(this.endPointURL(xCoordination, yCoordination));
  }

  // eslint-disable-next-line class-methods-use-this
  endPointURL = (xCoordinate, yCoordinate) => 'https://data.sbb.ch/api/records/1.0/search/?dataset=mobilitat&q=&rows=2&facet=parkrail_anzahl'
    + '&facet=parkrail_preis_tag&facet=parkrail_preis_monat&facet=parkrail_pflichtig_zeit1&facet=parkrail_bemerkung&facet=mietvelo_bezeichnung'
      + `&facet=veloparking_status_d&facet=veloparking_abschliessbar&facet=bezeichnung_offiziell&geofilter.distance=${xCoordinate}%2C${yCoordinate}%2C100`;
}
