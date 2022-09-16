import Card from 'react-bootstrap/Card';

function CardTemplate(props) {
    const { name, surname } = props;
    const full_name = name + ' ' + surname;
    return (
        <div className={'col-4'}>
            <Card style={{
                marginTop: '70px',
                borderRadius:'15px',
                minHeight: '400px',
            }}>
                <Card.Img
                    style={{
                        width: '120px',
                        height: '120px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '20px',
                    }}
                    variant="top"
                    src={require('./Image/3551911.jpg')}
                />
                <Card.Body>
                    <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>Profile</Card.Title>
                    <Card.Text>
                        {full_name ? (
                            <h6 style={{ marginTop: '30px' }}>Kullanıcı adı: {full_name} </h6>
                        ) : null}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTemplate;


