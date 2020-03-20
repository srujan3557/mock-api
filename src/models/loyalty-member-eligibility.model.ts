import {Model, model, property} from '@loopback/repository';

@model()
export class LoyaltyMemberEligibility extends Model {
  @property({
    type: 'string',
    required: true,
  })
  payWithMilesEligibleCode: string;

  @property({
    type: 'boolean',
    required: true,
  })
  mqmGiftEligible: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  mmGiftEligible: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  cbGiftEligible: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  premiumPassenger: boolean;

  @property({
    type: 'string',
  })
  promotionCode?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  promotionEligible: boolean;


  constructor(data?: Partial<LoyaltyMemberEligibility>) {
    super(data);
  }
}

export interface LoyaltyMemberEligibilityRelations {
  // describe navigational properties here
}

export type LoyaltyMemberEligibilityWithRelations = LoyaltyMemberEligibility & LoyaltyMemberEligibilityRelations;
