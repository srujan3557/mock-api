import {Model, model, property} from '@loopback/repository';
import {LoyaltyMemberEligibility} from '../models/loyalty-member-eligibility.model';
import {LoyaltyMemberBalance} from '../models/loyalty-member-balance.model';
@model()
export class LoyaltyMemberAccount extends Model {
  @property({
    type: 'string',
    required: false,
  })
  enrollmentStartLocalDate: string;

  @property({
    type: 'string',
    required: false,
  })
  accountStatusCode: string;

  @property({
    type: 'string',
    required: false,
  })
  membershipStatusCode: string;

  @property({
    type: 'string',
    required: false,
  })
  accountTypeCode: string;

  @property({
    type: 'string',
    required: true,
  })
  birthDate: string;

  @property({
    type: 'string',
    required: true,
  })
  genderCode: string;

  @property({
    type: 'string',
    required: false,
  })
  privacyCode: string;

  @property({
    type: 'string',
    required: false,
  })
  languageCode: string;

  @property({
    required: false,
  })
  loyaltyMemberEligibility: LoyaltyMemberEligibility;

  @property({
    type: 'string',
  })
  emergencyContact?: string;

  @property({
    required: false,
  })
  loyaltyMemberBalance: LoyaltyMemberBalance;

  constructor(data?: Partial<LoyaltyMemberAccount>) {
    super(data);
  }
}

export interface LoyaltyMemberAccountRelations {
  // describe navigational properties here
}

export type LoyaltyMemberAccountWithRelations = LoyaltyMemberAccount &
  LoyaltyMemberAccountRelations;
