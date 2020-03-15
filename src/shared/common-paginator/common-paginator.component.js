import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export const CommonPaginator = ({
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
}) => {
    return (
        <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}>
        </TablePagination>
    );
};
