import React, { Component } from 'react';
import 'react-native-plaid-link';

class Plaid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    render() {
        return <PlaidAuthenticator
            onMessage={this.onMessage}
            publicKey="bfc63562712f9829c4f8139ed9e252"
            env="development"
            product="auth,transactions"
            clientName="Logan Peterson"
        />
    }

    onMessage = (data) => {
        this.setState({data})
        console.log(data);
    }
}

export default Plaid;