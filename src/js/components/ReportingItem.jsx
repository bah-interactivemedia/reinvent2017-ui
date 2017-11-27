import React from 'react';

const ReportingItem = ({title, children}) => {
    return (
        <div className="reporting-item">
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default ReportingItem;