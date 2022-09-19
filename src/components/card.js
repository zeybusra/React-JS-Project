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

                    <Card.Text style={{ marginTop: '30px' }}>Name: {firstName}</Card.Text>
                    <Card.Text style={{ marginTop: '30px' }}>Surname: {lastName}</Card.Text>
                    <Card.Text style={{ marginTop: '30px' }}>Username: {userName}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTemplate;
