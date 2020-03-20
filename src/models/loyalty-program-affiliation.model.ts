import {Model, model, property} from '@loopback/repository';

@model()
export class LoyaltyProgramAffiliation extends Model {
  @property({
    type: 'string',
    required: true,
  })
  affiliationTypeCode: string;

  @property({
    type: 'string',
    required: true,
  })
  affiliationTypeDesc: string;

  @property({
    type: 'string',
    required: true,
  })
  affiliationStartLocalDate: string;

  @property({
    type: 'string',
    required: true,
  })
  affiliationEndLocalDate: string;

  @property({
    type: 'string',
    required: true,
  })
  affiliationId: string;

  @property({
    type: 'string',
  })
  affiliationSequenceNum?: string;

  @property({
    type: 'string',
  })
  affiliationTierLevelCode?: string;

  @property({
    type: 'string',
  })
  affiliationCompanyTypeCode?: string;


  constructor(data?: Partial<LoyaltyProgramAffiliation>) {
    super(data);
  }
}

export interface LoyaltyProgramAffiliationRelations {
  // describe navigational properties here
}

export type LoyaltyProgramAffiliationWithRelations = LoyaltyProgramAffiliation & LoyaltyProgramAffiliationRelations;
