import React from 'react';

const DetailMentor = ({ name }) => {
    return (
        <div>
            <h1>My example is {name}</h1>
        </div>
    );
};
DetailMentor.getInitialProps = ({ query: { name } }) => {
    return { name }
}
export default DetailMentor;