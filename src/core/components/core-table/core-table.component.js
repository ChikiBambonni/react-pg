import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CommonTable } from '@shared/common-table';

export const CoreTable = (props) => {
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('api/users', {
            params: {}
        }).then(response => {
            return response.data.elements;
        }).then(response => {
            setHeaders(Object.keys(response[0] || []));
            setRows(response)
        });
        
    }, []);

    return (
        <CommonTable
            headers={headers} 
            rows={rows}>
        </CommonTable>
    );
};
