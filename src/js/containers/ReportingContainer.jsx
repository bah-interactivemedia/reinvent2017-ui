import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reportsActions from '../actions/reportsAction';

import ReportingItem from '../components/ReportingItem';
import ReportingValue from '../components/ReportingValue';
import ReportingDonut from '../components/ReportingDonut';

const propTypes = {
    reportsFetchData: PropTypes.func.isRequired,
    reportList: PropTypes.object
};

const defaultProps = {
    reportList: {}
};

export class ReportingContainer extends React.Component {

    componentWillMount() {
        this.getData();
    }

    getData() {
        this.props.reportsFetchData();
    }
    render() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col col-lg-4">
                    <ReportingItem title="Students">
                        <ReportingValue value="69" />
                    </ReportingItem>
                </div>
                <div className="col col-lg-4">
                    <ReportingItem title="Avg BMI">
                        <ReportingValue value="22.5" />
                    </ReportingItem>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-lg-4">
                    <ReportingItem title="Mile Run">
                        <ReportingDonut data={[{angle:33},{angle:25},{angle:11}]} />
                    </ReportingItem>
                </div>
                <div className="col col-lg-4">
                    <ReportingItem title="Curl Ups">
                        <ReportingDonut data={[{angle:42},{angle:20},{angle:7}]} />
                    </ReportingItem>
                </div>
            </div>
        </div>
    );
    }
};

ReportingContainer.propTypes = propTypes;
ReportingContainer.defaultProps = defaultProps;

export default connect(
 (state) => ({
    reportList: state.reports.reportList,
 }),
 (dispatch) => bindActionCreators(reportsActions, dispatch)
 )(ReportingContainer); 