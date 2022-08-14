import React from 'react';
import Link from 'next/link';
import styles from "../styles/pagination.module.scss";

const Pagination = ({ pg, setPage, isPreviousData }) => {
    return (
        <div className={styles.pagination}>
            <div className="container">
                <div className={styles.container}>
                    <Link href="#!">
                        <a onClick={() => setPage(pg)} disabled={isPreviousData}>{pg}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pagination;