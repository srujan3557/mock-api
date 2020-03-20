import {Model, model, property} from '@loopback/repository';
import {Name} from './name.model';
@model()
export class SecureFlightPassengerData extends Model {
  @property({
    required: false,
  })
  name?: Name;

  @property({
    type: 'string',
  })
  birthDate?: string;

  @property({
    type: 'string',
  })
  genderCode?: string;

  @property({
    type: 'string',
  })
  knownTravelerNum?: string;

  @property({
    type: 'string',
  })
  redressNum?: string;

  constructor(data?: Partial<SecureFlightPassengerData>) {
    super(data);
  }
}

export interface SecureFlightPassengerDataRelations {
  // describe navigational properties here
}

export type SecureFlightPassengerDataWithRelations = SecureFlightPassengerData &
  SecureFlightPassengerDataRelations;
