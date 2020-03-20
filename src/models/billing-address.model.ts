import {Model, model, property} from '@loopback/repository';

@model()
export class BillingAddress extends Model {
  @property({
    type: 'string',
  })
  addressLine1Text?: string;

  @property({
    type: 'string',
  })
  addressLine2Text?: string;

  @property({
    type: 'string',
  })
  countryCode?: string;

  @property({
    type: 'string',
  })
  districtTownName?: string;

  @property({
    type: 'string',
  })
  cityLocalityName?: string;

  @property({
    type: 'string',
  })
  prefectureLocationName?: string;

  @property({
    type: 'string',
  })
  postalCode?: string;

  @property({
    type: 'string',
  })
  countrySubdivisionCode?: string;

  @property({
    type: 'string',
  })
  businessName?: string;

  @property({
    type: 'string',
  })
  contactPointCode?: string;

  @property({
    type: 'string',
  })
  primaryAddress?: string;

  @property({
    type: 'string',
  })
  addressSequenceNum?: string;

  @property({
    type: 'string',
  })
  addressStartLocalDate?: string;

  @property({
    type: 'string',
  })
  addressAliasName?: string;


  constructor(data?: Partial<BillingAddress>) {
    super(data);
  }
}

export interface BillingAddressRelations {
  // describe navigational properties here
}

export type BillingAddressWithRelations = BillingAddress & BillingAddressRelations;
