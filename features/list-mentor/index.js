import React, { useState } from 'react';
import { useQuery } from "react-query";
import { getMentorsPage } from "../../utils/api/callAPI";
import styles from "../../styles/listmentor.module.scss";
import ItemMentor from "../../components/item-mentor";
import Pagination from '../../components/pagination';
import Categories from '../categories';

const ListMentor = () => {
    const [page, setPage] = useState(1);
    
    const {
        isLoading,
        isError,
        error,
        data: mentors,
        isFetching,
        isPreviousData
    } = useQuery(["/mentors", page], () => getMentorsPage(page), {
        keepPreviousData: true
    })
    if (isLoading) return <p>Loading Users Mentor...</p>

    if (isError) return <p>Error: {error.message}</p>
    const [list, setList] = useState(mentors.data);
    const content = list.map(user => <ItemMentor key={user.id} user={user} />)


    const lastPage = () => setPage(mentors.total_page)

    const firstPage = () => setPage(1)
    
    const pagesArray = Array(mentors.total_page).fill().map((_, index) => index + 1)
    const paginationNumber = (
        <div className={styles.pagination}>
            <div className={styles.btnPrev} onClick={firstPage} disabled={isPreviousData || page === 1}>&lt;&lt;</div>
            {pagesArray.map(pg => <Pagination key={pg} pg={pg} setPage={setPage} />)}
            <div className={styles.btnNext} onClick={lastPage} disabled={isPreviousData || page === mentors.total_page}>&gt;&gt;</div>
        </div>
    )
    const filterCategoryMentor = (keyCategory) => {
        const newArr = [];
        if (keyCategory === "All Category") {
            setList(mentors.data)
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
                    {isFetching && <span>Loading...</span>}
                    {content}
                    {paginationNumber}
                </div>
            </div>
        </div>
    );
};

export default ListMentor;