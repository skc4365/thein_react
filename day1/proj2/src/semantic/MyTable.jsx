import React from 'react';

function MyTable(props) {
    const data = [
        {id: 1, brand:'Ford', model:'Mustang'},
        {id: 2, brand:'VW', model:'Beetle'},
        {id: 3, brand:'brand', model:'Model S'}
    ];
    return (
        <div>
            <hr />
            <h1>MyTable</h1>
            <table style={{border:'1px solid red'}}>
                <tbody>
                    {
                        data.map(
                            (item) =>
                                <tr key={item.id}>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                </tr>
                                
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MyTable;