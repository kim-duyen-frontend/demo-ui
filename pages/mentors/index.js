import React from 'react';
import LayoutMentors from '../../components/layout-mentors';

const Mentors = () => {
    return (
        <div>
            <h1>Mentors</h1>
        </div>
    );
};
Mentors.getLayout = function getLayout(page) {
    return <LayoutMentors>{page}</LayoutMentors>
}
export default Mentors;