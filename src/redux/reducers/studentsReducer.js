const initialState = {
    studentList: []
};

const studentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'STUDENTS_FETCH_SUCCESS':
            return Object.assign({}, state, { studentList: action.studentList });
        default:
            return state;
    }
};

export default studentsReducer;