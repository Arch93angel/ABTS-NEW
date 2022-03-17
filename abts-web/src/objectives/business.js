import React from 'react';
import './obj.css/business.css';

function Business() {
    return (
        <div className='d-flex flex-column'>
            <div className='production-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one text-dark'>
                    <span className='obj-title'>Business</span>
                    <span className='obj-desc'>To encourage private sectors in their role as trade drivers</span>
                </div>
                <div>
                    <span className='obj-extent'>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default Business