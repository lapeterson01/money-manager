import React from 'react';

const Account = () => {
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

export default Account;