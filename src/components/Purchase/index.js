import React from 'react'

const Purchase = (purchase) => {
    const { name, price, brand, id } = purchase
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{brand}</td>
            <td>$ {price}</td>
        </tr>
    )
}

export default Purchase