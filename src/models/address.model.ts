import {Model, model, property} from '@loopback/repository';

@model()
export class Address extends Model {
  @property({
    type: 'string',
    required: true,
  })
  addressLine1Text: string;

  @property({
    type: 'string',
  })
  addressLine2Text?: string;

  @property({
    type: 'string',
    required: true,
  })
  countryCode: string;

  @property({
    type: 'string',
  })
  districtTownName?: string;

  @property({
    type: 'string',
    required: true,
  })
  cityLocalityName: string;

  @property({
    type: 'string',
  })
  prefectureLocationName?: string;

  @property({
    type: 'string',
    required: true,
  })
  postalCode: string;

  @property({
    type: 'string',
    required: true,
  })
  countrySubdivisionCode?: string;

  @property({
    type: 'string',
  })
  businessName?: string;

  @property({
    type: 'string',
  })
  contactPointCode: string;

  @property({
    type: 'boolean',
    required: true,
  })
  primaryAddress: boolean;

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

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
