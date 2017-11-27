import React from 'react';

const ReportingItem = ({title, children}) => {
    return (
        <div className="reporting-item">
            {children}
            <h4 className="reporting-item-title">{title}</h4>
        </div>
    );
};

export default ReportingItem;