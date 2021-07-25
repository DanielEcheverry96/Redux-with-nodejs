import { createStore, Store } from 'redux';
import { contadorActions } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';

const store: Store = createStore(contadorReducer);
store.subscribe(() => {
  console.log('subs', store.getState());
});

store.dispatch(contadorActions.incrementar);
store.dispatch(contadorActions.multiplicar);
