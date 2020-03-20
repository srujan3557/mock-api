import {Model, model, property} from '@loopback/repository';

@model()
export class PersonName extends Model {
  @property({
    type: 'string',
    required: false,
  })
  namePrefixCode: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  middleName?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
  })
  nameSuffixCode?: string;

  @property({
    type: 'string',
  })
  preferredName?: string;

  constructor(data?: Partial<PersonName>) {
    super(data);
  }
}

export interface PersonNameRelations {
  // describe navigational properties here
}

export type PersonNameWithRelations = PersonName & PersonNameRelations;
