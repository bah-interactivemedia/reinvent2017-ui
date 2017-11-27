import React from 'react';

import ReportingItem from '../components/ReportingItem';
import ReportingValue from '../components/ReportingValue';
import ReportingDonut from '../components/ReportingDonut';

const ReportingContainer = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-2 offset-md-2 reporting-section-title">
                    <h3>Summary</h3>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-6">
                    <ReportingItem title="Students">
                        <ReportingValue value="69" />
                    </ReportingItem>
                </div>
                <div className="col col-lg-6">
                    <ReportingItem title="Avg BMI">
                        <ReportingValue value="22.5" />
                    </ReportingItem>
                </div>
            </div>
            <div className="row">
                <div className="col col-2 offset-md-2 reporting-section-title">
                    <h3>Activities</h3>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-4 offset-md-2">
                    <ReportingItem title="Curls">
                        <ReportingDonut data={[{angle:42},{angle:20},{angle:7}]} />
                    </ReportingItem>
                </div>
                <div className="col col-lg-4">
                    <ReportingItem title="Mile">
                        <ReportingDonut data={[{angle:33},{angle:25},{angle:11}]} />
                    </ReportingItem>
                </div>
            </div>
        </div>
    );
};

export default ReportingContainer;