import { CREATE_ITEM } from '../constants';

const INITIAL_STATE = {
  itens: [],
}

const handleItens = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        itens: action.item
      };
    default:
      return state;
  }
}

export default handleItens;