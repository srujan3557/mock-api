import {Model, model, property} from '@loopback/repository';

@model()
export class BookingIdentifier extends Model {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  recordLocatorId: string;

  @property({
    type: 'string',
  })
  bookingCreationDate?: string;

  @property({
    type: 'boolean',
  })
  todayTrip?: boolean;

  @property({
    type: 'number',
  })
  nextFlightLeavingXHrs?: number;

  @property({
    type: 'number',
  })
  nextFlightLeavingXDays?: number;

  @property({
    type: 'string',
  })
  seqNum?: string;

  @property({
    type: 'string',
  })
  ssrCount?: string;

  @property({
    type: 'boolean',
  })
  otherAirlinesAvailable?: boolean;


  constructor(data?: Partial<BookingIdentifier>) {
    super(data);
  }
}

export interface BookingIdentifierRelations {
  // describe navigational properties here
}

export type BookingIdentifierWithRelations = BookingIdentifier & BookingIdentifierRelations;
