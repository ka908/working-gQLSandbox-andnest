import { Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => String)
export class UserResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }
}
