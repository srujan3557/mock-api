import {Model, model, property} from '@loopback/repository';
import {FlightLegId} from './flight-leg-id.model';
import {TripCompanionInfo} from './trip-companion-info.model';
import {Schedule} from './schedule.model';
import {Actual} from './actual.model';
@model()
export class FlightLeg extends Model {
  @property({required: false})
  flightLegId?: FlightLegId;

  @property({
    required: false,
  })
  schedules?: Schedule;

  @property({
    required: false,
  })
  actuals?: Actual;

  @property({
    type: 'string',
  })
  departureDelay?: string;

  @property({
    type: 'string',
  })
  cancellation?: string;

  @property({
    type: 'boolean',
  })
  isCancelled?: boolean;

  @property({
    type: 'boolean',
  })
  isDelayed?: boolean;

  @property({
    type: 'boolean',
  })
  isDiverted?: boolean;

  @property({
    type: 'boolean',
  })
  isReturned?: boolean;

  @property({
    type: 'boolean',
  })
  isflightArrived?: boolean;

  @property({
    type: 'string',
  })
  latestFlightAdvisoryMessageText?: string;

  @property.array(TripCompanionInfo, {required: false})
  tripCompanionInfo?: TripCompanionInfo[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  ssrTrip?: string[];

  @property({
    type: 'string',
  })
  brandRq?: string;

  @property({
    type: 'string',
  })
  flightStatus?: string;

  @property({
    type: 'string',
  })
  layOverTime?: string;

  @property({
    type: 'string',
  })
  flightInfo?: string;

  constructor(data?: Partial<FlightLeg>) {
    super(data);
  }
}

export interface FlightLegRelations {
  // describe navigational properties here
}

export type FlightLegWithRelations = FlightLeg & FlightLegRelations;
