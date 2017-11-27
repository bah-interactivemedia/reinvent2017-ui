import React from 'react';

import Heading from '../components/Heading';
import ReportingItem from '../components/ReportingItem';
import ReportingValue from '../components/ReportingValue';

const ReportingContainer = () => {
    return (
        <div className="container-fluid">
            <Heading text="Reporting" />
            <ReportingItem title="Students">
                <ReportingValue value="69" />
            </ReportingItem>
        </div>
    );
};

export default ReportingContainer;