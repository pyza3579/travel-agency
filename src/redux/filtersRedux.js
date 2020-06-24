/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTripTag = payload => ({ payload, type: ADD_TAG });
export const removeTripTag = payload => ({ payload, type: REMOVE_TAG });
export const changeTripDuration = payload => ({ payload, type: CHANGE_DURATION });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    default:
      return statePart;
  }
}
