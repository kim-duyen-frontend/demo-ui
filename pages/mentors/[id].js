import React from 'react';

const DetailMentor = ({ id }) => {
    return (
        <div>
            <h1>My example is {id}</h1>
        </div>
    );
};
DetailMentor.getInitialProps = ({ query: { id } }) => {
    return { id }
}
export default DetailMentor;