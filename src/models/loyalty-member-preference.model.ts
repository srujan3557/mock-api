import {Model, model, property} from '@loopback/repository';

@model()
export class LoyaltyMemberPreference extends Model {
  @property({
    type: 'string',
  })
  preferenceCategoryId: string;

  @property({
    type: 'string',
  })
  preferenceCategoryIdDesc: string;

  @property({
    type: 'string',
  })
  preferenceCode: string;

  @property({
    type: 'string',
  })
  preferenceCodeDesc: string;

  @property({
    type: 'string',
  })
  preferenceAdditionalText?: string;

  @property({
    type: 'string',
  })
  preferenceSequenceNum: string;

  constructor(data?: Partial<LoyaltyMemberPreference>) {
    super(data);
  }
}

export interface LoyaltyMemberPreferenceRelations {
  // describe navigational properties here
}

export type LoyaltyMemberPreferenceWithRelations = LoyaltyMemberPreference &
  LoyaltyMemberPreferenceRelations;
