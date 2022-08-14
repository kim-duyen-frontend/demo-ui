import React from 'react';

const ItemMentor = ({user}) => {
    return (
        <div className="itemmentor">
            <h2>{user.name}</h2>
            <p>User ID: {user.id}</p>
        </div>
    );
};

export default ItemMentor;