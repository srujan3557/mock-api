import {Model, model, property} from '@loopback/repository';
import {BillingAddress} from '../models/billing-address.model';
@model()
export class PaymentCard extends Model {
  @property({
    type: 'string',
    required: true,
  })
  tokenizedCardNum: string;

  @property({
    type: 'string',
    required: true,
  })
  cardDiscontinueDate: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentCardTypeCode: string;

  @property({
    type: 'string',
  })
  cardHolderName?: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentCardLast4Num: string;

  @property({
    required: true,
  })
  billingAdr: BillingAddress;

  @property({
    type: 'string',
  })
  preferenceSequenceNum?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  defaultCard: boolean;

  @property({
    type: 'string',
  })
  paymentCardAliasName?: string;

  @property({
    type: 'string',
  })
  contactPointCode?: string;

  @property({
    type: 'boolean',
  })
  previousPurchaseVerification?: boolean;

  constructor(data?: Partial<PaymentCard>) {
    super(data);
  }
}

export interface PaymentCardRelations {
  // describe navigational properties here
}

export type PaymentCardWithRelations = PaymentCard & PaymentCardRelations;
