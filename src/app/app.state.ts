import { State, Action } from '@ngxs/store';
import { StateRepository, action, NgxsDataRepository } from '@ngxs-labs/data';

@State<number>({
  name: 'count',
  defaults: 0
})
@StateRepository()
export class CountState extends NgxsDataRepository<number> {
  @action() public increment(): void {
    this.ctx.setState((state: number) => ++state);
  }
}
