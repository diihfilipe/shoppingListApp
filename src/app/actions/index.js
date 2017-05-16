import { CREATE_ITEM } from '../constants';

export const createItem = (item) => {
  return {
    type: CREATE_ITEM,
    item
  }
}