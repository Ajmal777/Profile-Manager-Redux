const initialState = [];

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'EDIT_USER':
            return state.map(user => user.id === action.payload.id? action.payload : user);
        case 'DELETE_USER': {
            const newState = state.filter(user => user.id!== action.payload.id);

            // this updates all user's id to prevent duplicate id
            return newState.map((user, index) => {
                return {
                  ...user,
                  id: index+1, 
                }
            });
        }
        default:
            return state;
    }
}

export default actionReducer;