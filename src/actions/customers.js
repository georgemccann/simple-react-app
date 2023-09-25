import {CustomersTypes as types} from "@/types/Customers/CustomersTypes";

export const updateCustomers = data => (dispatch, getState) => {
  dispatch({type: types.UPDATE_CUSTOMERS_REQUEST});
 
  try {
    dispatch({type: types.UPDATE_CUSTOMERS_SUCCESS, payload: [data]});
  } catch (error) {
    dispatch({type: types.UPDATE_CUSTOMERS_FAILED, payload: error});
  }
};