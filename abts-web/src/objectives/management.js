import React from 'react';
import './obj.css/management.css';

function Management() {
    return (
        <div className='d-flex flex-column'>
            <div className='production-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one text-dark'>
                    <span className='obj-title'>Management</span>
                    <span className='obj-desc'>To create a symposium for networking and project match making</span>
                </div>
                <div>
                    <span className='obj-extent'>Read More</span>
                </div>
            </div>
        </div>
    )
}

export default Management