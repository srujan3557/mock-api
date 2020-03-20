import {Model, model, property} from '@loopback/repository';

@model()
export class FlightLegId extends Model {
  @property({
    type: 'string',
  })
  operatingCarrierCode?: string;

  @property({
    type: 'string',
  })
  operatingFlightNum?: string;

  @property({
    type: 'string',
  })
  originAirport?: string;

  @property({
    type: 'string',
  })
  destinationAirport?: string;

  @property({
    type: 'string',
  })
  marketingCarrierCode?: string;

  @property({
    type: 'string',
  })
  marketingFlightNum?: string;

  @property({
    type: 'string',
  })
  departureDate?: string;


  constructor(data?: Partial<FlightLegId>) {
    super(data);
  }
}

export interface FlightLegIdRelations {
  // describe navigational properties here
}

export type FlightLegIdWithRelations = FlightLegId & FlightLegIdRelations;
