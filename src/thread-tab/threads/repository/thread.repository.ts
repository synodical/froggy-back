import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Thread } from '../entities/thread.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ThreadsRepository extends Repository<Thread> {
  constructor(
    @InjectRepository(Thread)
    private readonly repository: Repository<Thread>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findManyByPatternIdWitPagination(paginationOptions) {
    const threads = await this.repository
      .createQueryBuilder('thread')
      .leftJoin('thread.user', 'user')
      .select(['thread', 'user.nickname', 'user.profileImg'])
      .where('thread.patternId = :patternId', {
        patternId: paginationOptions.patternId,
      })
      .limit(paginationOptions.limit)
      .offset(paginationOptions.limit * (paginationOptions.page - 1))
      .getMany();
    return threads;
  }
}
