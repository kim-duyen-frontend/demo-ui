import React from 'react';
import Link from 'next/link';
import styles from "../styles/pagination.module.scss";

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <div className="container">
                <div className={styles.container}>
                    <Link href="#!">
                        <a>1</a>
                    </Link>
                    <Link href="#!">
                        <a>2</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pagination;