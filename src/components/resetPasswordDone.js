import React, { useState, useEffect } from 'react';
import './resetPasswordDone.css';
import ConstructionTwoToneIcon from '@mui/icons-material/ConstructionTwoTone';
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import { useSearchParams } from 'react-router-dom';

const ResetPasswordDone = props => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');

    return (
        <div>
            <div className="container">
                <div className="emptyCard">
                    {success === 'true' ? (
                        <div>
                            <div className="col-12">
                                <ThumbUpTwoToneIcon className="iconStyle" style={{ color: '#406b12' }} />
                            </div>

                            <div className="col-12">
                                <h4
                                    style={{
                                        marginBottom: '20px',
                                    }}
                                >
                                    Password Changed!
                                </h4>
                            </div>

                            <div className="col-12">
                                <h5>Your Password Has Been Changed Successfully</h5>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="col-12">
                                {/*<CancelTwoToneIcon className="iconStyle" style={{ color: '#C71803FF' }} />*/}
                                <ConstructionTwoToneIcon
                                    className="iconStyle"
                                    style={{ color: '#C71803FF' }}
                                />
                            </div>

                            <div className="col-12">
                                <h4 style={{ marginBottom: '20px' }}>Something Went Wrong!</h4>
                            </div>

                            <div className="col-12">
                                <h5>There is some problem. Please Again Later</h5>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordDone;
