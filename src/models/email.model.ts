import {Model, model, property} from '@loopback/repository';
import {EmailInterest} from './email-interest.model';

@model()
export class Email extends Model {
  @property({
    type: 'string',
    required: true,
  })
  emailAdr: string;

  @property({
    type: 'string',
    required: true,
  })
  contactPointCode: string;

  @property({
    type: 'boolean',
    required: true,
  })
  primaryEmail: boolean;

  @property({
    type: 'string',
  })
  emailSequenceNum?: string;

  @property({
    type: 'string',
  })
  emailFormatTypeCode?: string;

  @property({
    type: 'boolean',
    required: false,
  })
  invalidEmailAdr: boolean;

  @property.array(EmailInterest, {required: false})
  emailInterests: EmailInterest[];

  constructor(data?: Partial<Email>) {
    super(data);
  }
}

export interface EmailRelations {
  // describe navigational properties here
}

export type EmailWithRelations = Email & EmailRelations;
