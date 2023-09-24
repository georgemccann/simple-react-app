import {CustomersTypes as types} from "@/types/Customers/CustomersTypes";


const initialState = {
  isFetching: false,
  hasFailed: false,
  errorMsg: "",
  data: [
    {
      "name": "John Smith",
      "age": 32,
      "email": "john.smith@example.com"
    },
    {
      "name": "Emily Johnson",
      "age": 28,
      "email": "emily.johnson@example.com"
    },
    {
      "name": "Michael Davis",
      "age": 45,
      "email": "michael.davis@example.com"
    },
    {
      "name": "Sarah Brown",
      "age": 35,
      "email": "sarah.brown@example.com"
    },
    {
      "name": "David Wilson",
      "age": 29,
      "email": "david.wilson@example.com"
    },
    {
      "name": "Jennifer Lee",
      "age": 37,
      "email": "jennifer.lee@example.com"
    },
    {
      "name": "Robert Anderson",
      "age": 41,
      "email": "robert.anderson@example.com"
    },
    {
      "name": "Linda Martinez",
      "age": 33,
      "email": "linda.martinez@example.com"
    },
    {
      "name": "William Jackson",
      "age": 26,
      "email": "william.jackson@example.com"
    },
    {
      "name": "Karen White",
      "age": 39,
      "email": "karen.white@example.com"
    }
  ]
};
  

export const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CUSTOMERS_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        isFetching: false,
        hasFailed: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};
