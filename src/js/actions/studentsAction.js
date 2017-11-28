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

export const studentsPostCurlsSuccess = (students) => {
    return {
        type: 'STUDENTS_POST_CURLS_SUCCESS',
        studentList: students
    };
};

export const studentsPostCurls = (testId = 1, studentId, curls) => {
    return (dispatch) => {

        // call api
        try {
            const body = { studentTestActivity1FieldTotal: curls.toString() };
            axios.post(`http://reinvent2017api-env.us-east-1.elasticbeanstalk.com/tests/${testId}/${studentId}/curls`, body)
            .then((response) => {
                return response.data;
              });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
};

export const studentsPostMile = (testId = 1, studentId, minutes, seconds) => {
    return (dispatch) => {

        // call api
        try {
            const body = { studentTestActivity2FieldMinutes: minutes.toString(),
                            studentTestActivity2FieldSeconds: seconds.toString() 
            };
            axios.post(
                `http://reinvent2017api-env.us-east-1.elasticbeanstalk.com/tests/${testId}/${studentId}/mile`, body)
                .then((response) => {
                    return response.data;
                  });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
};

export const studentsPostBodyComp = (studentId, args) => {
    return (dispatch) => {
        // call api
        try {
            const body = { args };
            axios.post(`http://reinvent2017api-env.us-east-1.elasticbeanstalk.com/students/${studentId}/attributes`, body)
                .then((response) => {
                    return response.data;
                });
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    }
}