import React, { Component } from 'react';

class Account extends Component {
    render () {
        let test = 1;
        switch (test) {
            case 1:
                return (
                    <div className="row justify-content-center">
                        <a href="/auth/get">Link Account</a>
                    </div>
                )
            default:
                return (
                    <div>
                        <div className="row justify-content-end">
                            <a href='/bills/123'>My Bills</a>
                        </div>
                        <hr />
                        <h1 className="text-center">Account</h1>
                        <div className="row" style={{width:"75%", marginLeft:"auto", marginRight:"auto"}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="text-center">Checking</th>
                                        <th className="text-center">Savings</th>
                                    </tr>
                                    <tr>
                                        <td>$$$</td>
                                        <td>$$$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row" style={{width:'75%', marginLeft:"auto", marginRight:"auto"}}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="text-center">Location</th>
                                        <th className="text-center">Amount</th>
                                        <th className="text-center">Date</th>
                                    </tr>
                                    <tr>
                                        <td>There</td>
                                        <td>$$$</td>
                                        <td>01/02/03</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
        }
    }
}

export default Account;