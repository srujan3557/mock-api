import {DefaultCrudRepository} from '@loopback/repository';
import {LoyaltyMember, LoyaltyMemberRelations} from '../models';
import {ProfileDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LoyaltyMemberRepository extends DefaultCrudRepository<
  LoyaltyMember,
  typeof LoyaltyMember.prototype.loyaltyMemberId,
  LoyaltyMemberRelations
> {
  constructor(
    @inject('datasources.profileDb') dataSource: ProfileDbDataSource,
  ) {
    super(LoyaltyMember, dataSource);
  }
}
