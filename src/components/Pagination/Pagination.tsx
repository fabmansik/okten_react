import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const {total_items} = useAppSelector(state => state.cars.pagination)
    const [querry, setQuerry] = useSearchParams({page: '1', page_size: '10'})
    const handleChangePage = (e: React.MouseEvent<HTMLButtonElement> | null, page: number): void => {
        setQuerry(prev => {
            prev.set('page', (page + 1).toString())
            return prev
        })
    }
    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuerry(prev=>{
            prev.set('page_size', (e.target.value).toString())
            return prev
        })
    }
    return (
        <>{
            total_items && <TablePagination
                component="div"
                count={total_items}
                page={+querry.get('page') - 1}
                onPageChange={handleChangePage}
                rowsPerPage={+querry.get('page_size')}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
            />
        }

        </>
    );
};

export default Pagination;