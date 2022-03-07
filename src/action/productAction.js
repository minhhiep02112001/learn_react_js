const productAction = (state, action) => {

    switch (action.type) {
        case 'CREATE':
            return [
                ...state,
                action.data
            ];

        case 'SEARCH':
            var result = state.filter(item => {
                let val = item.name.toString().toLowerCase();
                return val.indexOf(action.inputData.toString().toLowerCase()) >= 0
            })
            return result ?? [];

        case 'DELETE':
            return [
                ...state
            ];
            
        default:
            return state;
    }
};

export default productAction;