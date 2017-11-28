const initialState = {
    reports: {}
};

const reportsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REPORTS_FETCH_SUCCESS':
            return Object.assign({}, state, { reportList: action.reports });
        default:
            return state;
    }
};

export default reportsReducer;