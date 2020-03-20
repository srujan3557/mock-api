import {Model, model, property} from '@loopback/repository';

@model()
export class TripCompanionInfo extends Model {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  nameNumber?: string;

  @property({
    type: 'string',
  })
  lastNameNumber?: string;

  @property({
    type: 'string',
  })
  ticketNumber?: string;

  @property({
    type: 'string',
  })
  customerAccountType?: string;

  @property({
    type: 'string',
  })
  skyMilesNumber?: string;

  @property({
    type: 'string',
  })
  tripStatus?: string;

  @property({
    type: 'string',
  })
  brandPurchased?: string;

  @property({
    type: 'string',
  })
  brandUpgraded?: string;

  @property({
    type: 'string',
  })
  upgradeType?: string;

  @property({
    type: 'string',
  })
  seatNum?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  ssrTrip?: string[];


  constructor(data?: Partial<TripCompanionInfo>) {
    super(data);
  }
}

export interface TripCompanionInfoRelations {
  // describe navigational properties here
}

export type TripCompanionInfoWithRelations = TripCompanionInfo & TripCompanionInfoRelations;
