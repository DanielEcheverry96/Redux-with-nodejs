import { Action, Reducer } from './ngrx-fake/ngrx-fake';
import { contadorReducer } from './contador/contador.reducer';
import { contadorActions } from './contador/contador.actions';

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState(): T {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);
console.log(store.getState());
store.dispatch(contadorActions.incrementar);
console.log(store.getState());
store.dispatch(contadorActions.incrementar);
console.log(store.getState());
store.dispatch(contadorActions.multiplicar);
console.log(store.getState());
store.dispatch(contadorActions.dividir);
console.log(store.getState());
store.dispatch(contadorActions.decrementar);
console.log(store.getState());
