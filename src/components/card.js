import Card from 'react-bootstrap/Card';

function CardTemplate(props) {
    const { firstName, lastName, userName, profilePictureLocation } = props;
    return (
        <div className={'col-4'}>
            <Card
                style={{
                    marginTop: '70px',
                    borderRadius: '15px',
                    minHeight: '400px',
                }}
            >
                {/* TODO: Add change profile picture component/page/button */}
                <Card.Img
                    style={{
                        width: '120px',
                        height: '120px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '20px',
                    }}
                    variant="top"
                    src={profilePictureLocation}
                />
                <Card.Body>
                    <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>Profile</Card.Title>
                    <Card.Text>
                        <h6 style={{ marginTop: '30px' }}>Name: {firstName} </h6>
                        <h6 style={{ marginTop: '30px' }}>Surname: {lastName} </h6>
                        <h6 style={{ marginTop: '30px' }}>Username: {userName} </h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTemplate;
