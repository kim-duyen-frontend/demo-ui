import React from 'react';
import styles from "../../styles/listmentor.module.scss";
import Pagination from '../../components/pagination';

const ListMentor = () => {
    
    return (
        <div className={styles.listmentor}>
            <div className="container">
                <div className={styles.container}>
                    <h1>List mentor</h1>
                </div>
            </div>
            <Pagination />
        </div>
    );
};

export default ListMentor;