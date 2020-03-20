import {Model, model, property} from '@loopback/repository';

@model()
export class Phone extends Model {
  @property({
    type: 'string',
    required: true,
  })
  countryCode: string;

  @property({
    type: 'string',
    required: false,
  })
  countryCallingCode: string;

  @property({
    type: 'string',
    required: false,
  })
  phoneAreaNum: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNum: string;

  @property({
    type: 'string',
  })
  phoneExtentionNum?: string;

  @property({
    type: 'string',
    required: true,
  })
  contactPointCode: string;

  @property({
    type: 'string',
    required: false,
  })
  phoneContactMethodCode: string;

  @property({
    type: 'boolean',
    required: true,
  })
  primaryPhone: boolean;

  @property({
    type: 'string',
  })
  phoneSequenceNum?: string;

  constructor(data?: Partial<Phone>) {
    super(data);
  }
}

export interface PhoneRelations {
  // describe navigational properties here
}

export type PhoneWithRelations = Phone & PhoneRelations;
