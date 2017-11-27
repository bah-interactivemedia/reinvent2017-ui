import React from 'react';

import ReportingItem from '../components/ReportingItem';
import ReportingValue from '../components/ReportingValue';
import ReportingDonut from '../components/ReportingDonut';

const ReportingContainer = () => {
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
};

export default ReportingContainer;