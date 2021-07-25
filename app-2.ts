import { contadorActions } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';

console.log(contadorReducer(10, contadorActions.incrementar));
console.log(contadorReducer(10, contadorActions.decrementar));
console.log(contadorReducer(10, contadorActions.multiplicar));
console.log(contadorReducer(10, contadorActions.dividir));
console.log(contadorReducer(10, contadorActions.reset));
