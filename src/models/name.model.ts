import {Model, model, property} from '@loopback/repository';

@model()
export class Name extends Model {
  @property({
    type: 'string',
  })
  namePrefixCode?: string;

  @property({
    type: 'string',
  })
  firstName?: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'string',
  })
  nameSuffixCode?: string;

  @property({
    type: 'string',
  })
  preferredName?: string;


  constructor(data?: Partial<Name>) {
    super(data);
  }
}

export interface NameRelations {
  // describe navigational properties here
}

export type NameWithRelations = Name & NameRelations;
