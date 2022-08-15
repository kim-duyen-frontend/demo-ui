import React, { useState, useEffect } from 'react';
import { getMentorsPage } from "../../utils/api/callAPI";
import styles from "../../styles/listmentor.module.scss";
import ItemMentor from "../../components/item-mentor";
import Pagination from '../../components/pagination';
import Categories from '../categories';

const ListMentor = () => {
    const [page, setPage] = useState(1);
    const [mentors, setMentors] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        getMentorsPage(page).then((json) => {
            setMentors(json);
            setList(json.data);
        });
    }, [page]);

    const lastPage = () => setPage(mentors.total_page)

    const firstPage = () => setPage(1)

    const pagesArray = Array(mentors.total_page).fill().map((_, index) => index + 1)
    const paginationNumber = (
        <div className={styles.pagination}>
            <div className={styles.btnPrev} onClick={firstPage} disabled={page === 1}>&lt;&lt;</div>
            {pagesArray.map(pg => <Pagination key={pg} pg={pg} setPage={setPage} />)}
            <div className={styles.btnNext} onClick={lastPage} disabled={page === mentors.total_page}>&gt;&gt;</div>
        </div>
    )
    const content = list && list.length > 0 && list.map(user => <ItemMentor key={user.id} user={user} />)
    const filterCategoryMentor = (keyCategory) => {
        const newArr = [];
        if (keyCategory === "All Category") {
            setList(mentors.data);
        } else {
            mentors.data.map((item) => item.tags.map((tag) => {
                if (tag === keyCategory) {
                    newArr.push(item)
                }
            }))
            setList(newArr);
        }
    }
    return (
        <div className={styles.listmentor}>
            <div className="container">
                <div className={styles.container}>
                    <Categories filterCategoryMentor={filterCategoryMentor} />
                    {content}
                    {paginationNumber}
                </div>
            </div>
        </div>
    );
};

export default ListMentor;