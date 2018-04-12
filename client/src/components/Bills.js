import React from 'react';

const Bills = () => {
    return (
        <div>
            <div className="row justify-content-end">
                <a href="/budget/123">My Budget</a>
            </div>
            <hr />
            <h1 className="text-center">Bills</h1>
            <div className="row" style={{width:"75%", marginLeft:"auto", marginRight:"auto"}}>
                <table>
                    <tbody>
                        <tr>
                            <th className="text-center">What</th>
                            <th className="text-center">Amount</th>
                            <th className="text-center">Date</th>
                        </tr>
                        <tr>
                            <td>Spotify</td>
                            <td>$10.66</td>
                            <td>04/10/2018</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bills;