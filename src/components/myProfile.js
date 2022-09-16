import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import CardTemplate from './card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressTemp from "./small-components/progress";


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                },
                {
                    id: 2,
                    name: 'Ervin Howell',
                    username: 'Antonette',
                    email: 'Shanna@melissa.tv',
                },
                {
                    id: 3,
                    name: 'Clementine Bauch',
                    username: 'Samantha',
                    email: 'Nathan@yesenia.net',
                },
            ],
        };
    }

    render() {
        return (
            <Container>
                <h2 style={{textDecorationColor: 'black', fontSize: '25px', paddingTop: '80px'}}>
                    Hoşgeldin Zeynep Ünal;
                </h2>

                <div style={{justifyContent:'center'}} className={'row'}>
                    <div className={'col-6'} style={{marginTop: '50px'}}>
                        <ProgressTemp/>
                    </div>
                    <div className={'col-6'} style={{marginTop: '50px'}}>
                        <ProgressTemp/>
                    </div>
                </div>

                <div className={'row'}>
                    {this.state.users.map(user => {
                        return <CardTemplate key={user.id} name={user.name} surname={user.username}/>;
                    })}
                </div>
            </Container>
        );
    }
}

export default MyProfile;
