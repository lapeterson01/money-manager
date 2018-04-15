import React from 'react';

const Home = () => {
    return (
        <div className="jumbotron text-center">
            <h1>Welcome to Money Manager</h1>
            <hr />
            <p className="lead">
                <a href="/account/123" className="btn btn-lg btn-primary">My Account</a>
            </p>
        </div>
    )
}

export default Home;