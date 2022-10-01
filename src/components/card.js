import Card from 'react-bootstrap/Card';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import React from 'react';
import ActionButton from './inputs/actionButton';

function CardTemplate(props) {
    const { firstName, lastName, userName, profilePictureLocation, token } = props;
    const [selectedFile, setSelectedFile] = React.useState(null);

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile);
        console.log(event.target.files[0]);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        // TODO: fix form data error
        formData.append('file', selectedFile, selectedFile.name);
        return await uploadProfilePicture(formData);
    };

    async function uploadProfilePicture(body) {
        return await fetch('https://express-js-api.vercel.app/api/v1/upload_profile_picture', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })
            .then(data => data.json())
            .then(json => {
                console.log(json);
                return json;
            })
            .catch(err => {
                console.log('err');
                console.log(err);
                console.log('something went wrong, please try again later');
                return undefined;
            });
    }

    // TODO 2.1: Add change profile picture component/page/button
    // TODO 2.2: Add remove profile picture button
    return (
        <div className={'col-4'}>
            <Card
                style={{
                    marginTop: '20px',
                    borderRadius: '15px',
                    minHeight: '400px',
                }}
            >
                <form onSubmit={handleSubmit}></form>
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
                    <Stack>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={onFileChange} />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                    <ActionButton
                        title={'Change Profile Picture'}
                        actionType={'submit'}
                        isDisabled={false}
                        loading={false}
                    />
                    <Card.Text style={{ marginTop: '30px', textTransform: 'uppercase' }}>
                        Name: {firstName}
                    </Card.Text>
                    <Card.Text style={{ marginTop: '30px', textTransform: 'uppercase' }}>
                        Surname: {lastName}
                    </Card.Text>
                    <Card.Text style={{ marginTop: '30px', textTransform: 'uppercase' }}>
                        Username: {userName}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTemplate;
