import {Model, model, property} from '@loopback/repository';

@model()
export class LoyaltyMemberTierLevels extends Model {
  @property({
    type: 'string',
    required: false,
  })
  tierClassificationCode: string;

  @property({
    type: 'string',
    required: true,
  })
  tierLevelCode: string;

  @property({
    type: 'string',
    required: true,
  })
  tierLevelCodeDesc: string;

  @property({
    type: 'string',
    required: false,
  })
  tierLevelStartLocalDate: string;

  @property({
    type: 'string',
    required: false,
  })
  tierLevelEndLocalDate: string;

  constructor(data?: Partial<LoyaltyMemberTierLevels>) {
    super(data);
  }
}

export interface LoyaltyMemberTierLevelsRelations {
  // describe navigational properties here
}

export type LoyaltyMemberTierLevelsWithRelations = LoyaltyMemberTierLevels &
  LoyaltyMemberTierLevelsRelations;
