import axios from 'axios';

export const reportsFetchSuccess = (reports) => {
    return {
        type: 'REPORTS_FETCH_SUCCESS',
        reports: reports
    };
};

export const reportsFetchData = () => {
    return async (dispatch) => {

        // call api
        try {
            const response = await axios.get('http://reinvent2017api-env.us-east-1.elasticbeanstalk.com/reports');
            const data = response.data;
            // const data = [{name: 'Michael Bray',id: 1}, {name: 'Nat Burgwyn',id: 2}];

            dispatch(reportsFetchSuccess(data));
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };
};
