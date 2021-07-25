import { Action } from '../ngrx-fake/ngrx-fake';

const incrementar: Action = {
  type: 'INCREMENTAR'
};

const decrementar: Action = {
  type: 'DECREMENTAR'
};

const multiplicar: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};

const dividir: Action = {
  type: 'DIVIDIR',
  payload: 2
};

const reset: Action = {
  type: 'RESET'
};

export const contadorActions = {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
  reset
};
