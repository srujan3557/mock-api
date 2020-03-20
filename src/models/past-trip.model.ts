import {Model, model, property} from '@loopback/repository';

@model()
export class PastTrip extends Model {
  @property({
    type: 'array',
    itemType: 'object',
  })
  bookingIdentifier?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  passengerItinerarySegments?: object[];


  constructor(data?: Partial<PastTrip>) {
    super(data);
  }
}

export interface PastTripRelations {
  // describe navigational properties here
}

export type PastTripWithRelations = PastTrip & PastTripRelations;
