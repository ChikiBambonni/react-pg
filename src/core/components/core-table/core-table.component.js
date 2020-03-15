import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

import { CommonTable } from '@shared/common-table';
import { CommonPaginator } from '@shared/common-paginator';

export const CoreTable = (props) => {
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('api/users', {
            params: {
                pagesize: props.rowsPerPage,
                page: props.page + 1
            }
        }).then(response => {
            const { data } = response;
            setHeaders(Object.keys(data.elements[0] || []));
            setRows(data.elements);
            setCount(data.totalElements);
        });
        
    }, [props.page, props.rowsPerPage]);

    return (
        <Paper>
            <CommonTable
                headers={headers} 
                rows={rows}>
            </CommonTable>
            <CommonPaginator
                rowsPerPageOptions={props.rowsPerPageOptions}
                count={count}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                handleChangePage={props.handleChangePage}
                handleChangeRowsPerPage={props.handleChangeRowsPerPage}>
            </CommonPaginator>
        </Paper>
    );
};
