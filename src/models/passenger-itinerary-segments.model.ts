import {Model, model, property} from '@loopback/repository';
import {Schedule} from './schedule.model';
import {FlightLeg} from './flight-leg.model';
@model()
export class PassengerItinerarySegments extends Model {
  @property({
    required: false,
  })
  schedules?: Schedule;

  @property.array(FlightLeg, {required: false})
  flightLegs?: FlightLeg[];

  @property({
    type: 'string',
  })
  segmentStatus?: string;

  constructor(data?: Partial<PassengerItinerarySegments>) {
    super(data);
  }
}

export interface PassengerItinerarySegmentsRelations {
  // describe navigational properties here
}

export type PassengerItinerarySegmentsWithRelations = PassengerItinerarySegments &
  PassengerItinerarySegmentsRelations;
