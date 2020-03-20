import {Model, model, property} from '@loopback/repository';

@model()
export class Actual extends Model {
  @property({
    type: 'string',
  })
  departureLocalTs?: string;

  @property({
    type: 'string',
  })
  arrivalLocalTs?: string;

  @property({
    type: 'string',
  })
  arrivalDelayMinuteCnt?: string;

  @property({
    type: 'string',
  })
  departureDelayMinuteCnt?: string;


  constructor(data?: Partial<Actual>) {
    super(data);
  }
}

export interface ActualRelations {
  // describe navigational properties here
}

export type ActualWithRelations = Actual & ActualRelations;
