import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {LoyaltyMember} from '../models';
import {LoyaltyMemberRepository} from '../repositories';

export class LoyaltyMemberController {
  constructor(
    @repository(LoyaltyMemberRepository)
    public loyaltyMemberRepository: LoyaltyMemberRepository,
  ) {}

  @post('/loyaltymembers', {
    responses: {
      '200': {
        description: 'LoyaltyMember model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(LoyaltyMember)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoyaltyMember, {
            title: 'NewLoyaltyMember',
          }),
        },
      },
    })
    loyaltyMember: LoyaltyMember,
  ): Promise<LoyaltyMember> {
    return this.loyaltyMemberRepository.create(loyaltyMember);
  }

  @post('/loyaltymemberstest', {
    responses: {
      '200': {
        description: 'LoyaltyMember model fetch',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              items: {id: '123'},
            },
          },
        },
      },
    },
  })
  async findFromPost(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            items: {},
          },
        },
      },
    })
    customObject: {
      loyaltyMemberId: string;
      profileSearch: boolean;
      companionSearch: boolean;
      secureFlightPassengerDataSearch: boolean;
      voucherSearch: boolean;
    },
  ): Promise<any> {
    // build custom object return as result object

    console.log('id arg: ', customObject.loyaltyMemberId);

    const obj = this.loyaltyMemberRepository
      .findById(customObject.loyaltyMemberId)
      .then(function(result) {
        return result;
      })
      .then(function(result) {
        console.log(result); // "normalReturn"
        return {
          // I need to hardcode to begin
          errorList: null,
          hasErrors: 'false',
          omniProObject: {
            loyaltyMember: result,
            companions: [],
            secureFlightPassengerData: {
              name: {
                namePrefixCode: null,
                firstName: 'LEE',
                middleName: 'KEVIN',
                lastName: 'OSBORNE',
                nameSuffixCode: null,
                preferredName: null,
              },
              birthDate: '1950-11-02',
              genderCode: 'M',
              knownTravelerNum: null,
              redressNum: null,
            },
            passport: null,
            vouchers: [],
            secureFlightPassengerDataRetrievalStatus: {
              actionStatus: {
                statusCode: 'SUCCESS',
              },
              warnings: [],
            },
            companionRetrievalStatus: {
              actionStatus: {
                statusCode: 'SUCCESS',
              },
              warnings: [],
            },
            voucherRetrievalStatus: {
              actionStatus: {
                statusCode: 'NOT_REQUESTED',
              },
              warnings: [],
            },
            companionsCount: 0,
            travelCompanions: [],
            remainingCompanions: [],
            //}
          },
        };
      });

    console.log('obj: ', obj);

    return obj;
  }

  @get('/loyaltymembers/count', {
    responses: {
      '200': {
        description: 'LoyaltyMember model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(LoyaltyMember))
    where?: Where<LoyaltyMember>,
  ): Promise<Count> {
    return this.loyaltyMemberRepository.count(where);
  }

  @get('/loyaltymembers', {
    responses: {
      '200': {
        description: 'Array of LoyaltyMember model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(LoyaltyMember)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(LoyaltyMember))
    filter?: Filter<LoyaltyMember>,
  ): Promise<LoyaltyMember[]> {
    return this.loyaltyMemberRepository.find(filter);
  }

  @patch('/loyaltymembers', {
    responses: {
      '200': {
        description: 'LoyaltyMember PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoyaltyMember, {partial: true}),
        },
      },
    })
    loyaltyMember: LoyaltyMember,
    @param.query.object('where', getWhereSchemaFor(LoyaltyMember))
    where?: Where<LoyaltyMember>,
  ): Promise<Count> {
    return this.loyaltyMemberRepository.updateAll(loyaltyMember, where);
  }

  @get('/loyaltymembers/{id}', {
    responses: {
      '200': {
        description: 'LoyaltyMember model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(LoyaltyMember)},
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<LoyaltyMember> {
    return this.loyaltyMemberRepository.findById(id);
  }

  @patch('/loyaltymembers/{id}', {
    responses: {
      '204': {
        description: 'LoyaltyMember PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LoyaltyMember, {partial: true}),
        },
      },
    })
    loyaltyMember: LoyaltyMember,
  ): Promise<void> {
    await this.loyaltyMemberRepository.updateById(id, loyaltyMember);
  }

  @put('/loyaltymembers/{id}', {
    responses: {
      '204': {
        description: 'LoyaltyMember PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() loyaltyMember: LoyaltyMember,
  ): Promise<void> {
    await this.loyaltyMemberRepository.replaceById(id, loyaltyMember);
  }

  @del('/loyaltymembers/{id}', {
    responses: {
      '204': {
        description: 'LoyaltyMember DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.loyaltyMemberRepository.deleteById(id);
  }
}
