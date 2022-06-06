const createPolicy= (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const createClame= (name, amountOfMoneyToCollet) => {
  return {
    type: 'CREATE_CLAME',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollet
    }
  };
};

const deletePolicy= (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

//REDUCERS (Departments!)

const claimsHistory = (oldListOfClaims, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload]
  }

  return oldListOfClaims
}

const accounting = (bagOfMoney, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect
  }  else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }

  return bagOfMoney
}

const policies = (listOfPolicies, action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload]
  }  else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter( name => name !== action.payload.name)
  }

  return listOfPolicies
}

const { createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Peater', 30));
store.dispatch(createPolicy('Bob', 50));

store.dispatch(createClaime('Alex', 120));

store.dispatch(deletePolicy('Bob', 50));

console.log(store.getState());
