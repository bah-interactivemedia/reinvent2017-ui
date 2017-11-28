import axios from 'axios';

export const studentsFetchSuccess = (students) => {
    return {
        type: 'STUDENTS_FETCH_SUCCESS',
        studentList: students
    };
};

export const studentsFetchData = () => {
    return async (dispatch) => {

        // call api
        try {
            const response = await axios.get('http://reinvent2017api-env.us-east-1.elasticbeanstalk.com/students');
            const data = response.data;
            // const data = [{name: 'Michael Bray',id: 1}, {name: 'Nat Burgwyn',id: 2}];

            dispatch(studentsFetchSuccess(data));
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
};