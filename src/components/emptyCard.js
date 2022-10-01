import Card from 'react-bootstrap/Card';
import React from 'react';
import ProgressTemp from './small-components/progress';
import { Outlet } from 'react-router-dom';

function EmptyCardTemplate(props) {
    const { title, childrenComponent } = props;
    return (
        <div>
            <Card
                style={{
                    borderRadius: '25px',
                }}
            >
                <Card.Body>
                    <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{title}</Card.Title>
                    {childrenComponent && childrenComponent}
                </Card.Body>
            </Card>
        </div>
    );
}

export default EmptyCardTemplate;
