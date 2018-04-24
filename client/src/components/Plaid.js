import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link';

class Plaid extends Component {
    handleOnSuccess(token, metadata) {
        // send token to client server
        console.log(token);
    }

    handleOnExit() {
        // handle the case when your user exits Link
    }

    render() {
        return <PlaidLink
            clientName="Money Manager"
            env="development"
            product={["auth", "transactions"]}
            publicKey="bfc63562712f9829c4f8139ed9e252"
            onExit={this.handleOnExit}
            onSuccess={this.handleOnSuccess}>
            Open Link and connect your bank!
        </PlaidLink>
    }
}

export default Plaid;