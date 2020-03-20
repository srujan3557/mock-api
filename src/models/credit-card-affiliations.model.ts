import {Model, model, property} from '@loopback/repository';

@model()
export class CreditCardAffiliations extends Model {
  @property({
    type: 'string',
    required: false,
  })
  affiliationTypeCode: string;

  @property({
    type: 'string',
    required: false,
  })
  affiliationTypeDesc: string;

  @property({
    type: 'string',
    required: false,
  })
  affiliationStartLocalDate: string;

  @property({
    type: 'string',
    required: false,
  })
  affiliationEndLocalDate: string;

  @property({
    type: 'string',
    required: false,
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

  constructor(data?: Partial<CreditCardAffiliations>) {
    super(data);
  }
}

export interface CreditCardAffiliationsRelations {
  // describe navigational properties here
}

export type CreditCardAffiliationsWithRelations = CreditCardAffiliations &
  CreditCardAffiliationsRelations;
