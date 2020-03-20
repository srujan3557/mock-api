import {Model, model, property} from '@loopback/repository';

@model()
export class CabinUpgradePreference extends Model {
  @property({
    type: 'string',
    required: false,
  })
  preferenceCategoryId: string;

  @property({
    type: 'string',
    required: false,
  })
  preferenceCategoryIdDesc: string;

  @property({
    type: 'string',
    required: false,
  })
  preferenceCode: string;

  @property({
    type: 'string',
    required: false,
  })
  preferenceCodeDesc: string;

  @property({
    type: 'string',
  })
  preferenceAdditionalText?: string;

  @property({
    type: 'string',
  })
  preferenceSequenceNum?: string;

  @property({
    type: 'string',
  })
  seatPreferences?: string;

  constructor(data?: Partial<CabinUpgradePreference>) {
    super(data);
  }
}

export interface CabinUpgradePreferenceRelations {
  // describe navigational properties here
}

export type CabinUpgradePreferenceWithRelations = CabinUpgradePreference &
  CabinUpgradePreferenceRelations;
