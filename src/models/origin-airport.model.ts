import {Model, model, property} from '@loopback/repository';

@model()
export class OriginAirport extends Model {
  @property({
    type: 'string',
  })
  cityCode?: string;

  @property({
    type: 'string',
  })
  cityName?: string;

  @property({
    type: 'string',
  })
  airportCode?: string;

  @property({
    type: 'string',
  })
  airportName?: string;

  @property({
    type: 'string',
  })
  countryCode?: string;

  @property({
    type: 'string',
  })
  countryName?: string;

  @property({
    type: 'string',
  })
  stateCode?: string;

  @property({
    type: 'string',
  })
  stateName?: string;

  @property({
    type: 'string',
  })
  timeZone?: string;

  @property({
    type: 'string',
  })
  terminalName?: string;

  @property({
    type: 'string',
  })
  gateId?: string;


  constructor(data?: Partial<OriginAirport>) {
    super(data);
  }
}

export interface OriginAirportRelations {
  // describe navigational properties here
}

export type OriginAirportWithRelations = OriginAirport & OriginAirportRelations;
