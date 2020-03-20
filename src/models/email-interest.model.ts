import {Model, model, property} from '@loopback/repository';

@model()
export class EmailInterest extends Model {
  @property({
    type: 'string',
  })
  interestTypeCode?: string;

  @property({
    type: 'string',
  })
  interestTypeDesc?: string;

  constructor(data?: Partial<EmailInterest>) {
    super(data);
  }
}

export interface EmailInterestRelations {
  // describe navigational properties here
}

export type EmailInterestWithRelations = EmailInterest & EmailInterestRelations;
