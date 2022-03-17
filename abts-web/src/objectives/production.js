import React from 'react';
import './obj.css/production.css';

function Production() {
    return (
        <div className='d-flex flex-column'>
            <div className='production-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one text-dark'>
                    <span className='obj-title'>Production Line</span>
                    <span className='obj-desc'>To establish and consolidate a paradigm shift from total dependence on oil to other sectors of the economy</span>
                </div>
                <div>
                    <span className='obj-extent'>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default Production