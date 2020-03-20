import {Model, model, property} from '@loopback/repository';

@model()
export class LoyaltyMemberBalance extends Model {
  @property({
    type: 'string',
    required: true,
  })
  totalProgarmMileCnt: string;

  @property({
    type: 'string',
    required: true,
  })
  availableMileCnt: string;

  @property({
    type: 'string',
    required: true,
  })
  totalMqmMileCnt: string;


  constructor(data?: Partial<LoyaltyMemberBalance>) {
    super(data);
  }
}

export interface LoyaltyMemberBalanceRelations {
  // describe navigational properties here
}

export type LoyaltyMemberBalanceWithRelations = LoyaltyMemberBalance & LoyaltyMemberBalanceRelations;
