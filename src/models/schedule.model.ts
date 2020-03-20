import {Model, model, property} from '@loopback/repository';
import {OriginAirport} from './origin-airport.model';
import {DestinationAirport} from './destination-airport.model';
@model()
export class Schedule extends Model {
  @property({
    required: false,
  })
  originAirport?: OriginAirport;

  @property({
    required: false,
  })
  destinationAirport?: DestinationAirport;

  @property({
    type: 'string',
  })
  departureLocalTs?: string;

  @property({
    type: 'string',
  })
  arrivalLocalTs?: string;

  constructor(data?: Partial<Schedule>) {
    super(data);
  }
}

export interface ScheduleRelations {
  // describe navigational properties here
}

export type ScheduleWithRelations = Schedule & ScheduleRelations;
