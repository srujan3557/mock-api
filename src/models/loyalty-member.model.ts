import {Entity, model, property} from '@loopback/repository';
import {PersonName} from '../models/person-name.model';
import {LoyaltyMemberAccount} from '../models/loyalty-member-account.model';
import {LoyaltyMemberTierLevels} from '../models/loyalty-member-tier-levels.model';
import {SalesAffiliations} from '../models/sales-affiliations.model';
import {CreditCardAffiliations} from '../models/credit-card-affiliations.model';
import {LoyaltyProgramAffiliation} from '../models/loyalty-program-affiliation.model';
import {Address} from '../models/address.model';
import {Email} from '../models/email.model';
import {Phone} from '../models/phone.model';
import {CabinUpgradePreference} from './cabin-upgrade-preference.model';
import {PaymentCard} from './payment-card.model';
import {LoyaltyMemberPreference} from './loyalty-member-preference.model';
@model()
export class LoyaltyMember extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  loyaltyMemberId: string;

  @property({
    type: 'string',
    required: false,
  })
  carrierCode: string;

  @property({
    required: true,
  })
  personName: PersonName;

  @property({
    required: true,
  })
  loyaltyMemberAccount: LoyaltyMemberAccount;

  @property({
    type: 'string',
  })
  userSecurity?: string;

  @property({
    type: 'string',
  })
  loyaltyMemberCorporateAccounts?: string;

  @property.array(LoyaltyMemberTierLevels, {required: true})
  loyaltyMemberTierLevels?: LoyaltyMemberTierLevels[];

  @property({
    type: 'string',
  })
  loungeContracts?: string;

  @property.array(SalesAffiliations)
  salesAffiliations?: SalesAffiliations[];

  @property.array(CreditCardAffiliations)
  creditCardAffiliations?: CreditCardAffiliations[];

  @property.array(LoyaltyProgramAffiliation)
  loyaltyProgramAffiliations?: LoyaltyProgramAffiliation[];

  @property.array(Address, {required: true})
  addresses: Address[];

  @property.array(Email, {required: true})
  emailAccounts: Email[];

  @property.array(Phone, {required: true})
  phones: Phone[];

  @property.array(CabinUpgradePreference, {required: false})
  cabinUpgradePreferences: CabinUpgradePreference[];

  @property.array(PaymentCard, {required: false})
  paymentCardPreferences: PaymentCard[];

  @property.array(LoyaltyMemberPreference, {required: false})
  loyaltyMemberPreferences: LoyaltyMemberPreference[];

  constructor(data?: Partial<LoyaltyMember>) {
    super(data);
  }
}

export interface LoyaltyMemberRelations {
  // describe navigational properties here
}

export type LoyaltyMemberWithRelations = LoyaltyMember & LoyaltyMemberRelations;
