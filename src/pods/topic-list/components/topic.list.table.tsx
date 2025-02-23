import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

import {TopicModel} from '@/pods/topic-list/api';
import {TopicListRow} from './topic.list.row';

interface Props {
    className?: string;
    topicList: TopicModel[];
}

const StyledTableCell = styled(TableCell)(({theme}) => (
    {[`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        fontSize: 18
    }}
));

export const TopicListTable: React.FC<Props> = (props) => {
    const {className, topicList} = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
        ) => {
        setPage(newPage);
        };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement> | null
        ) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
        }

    return <>
        <TableContainer className = {className} component = {Paper} aria-label = "Tematicas de los posts">
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Materia</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0 ? 
                            (topicList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)) : topicList).map(item => 
                                <TopicListRow key = {item.id} topic = {item}></TopicListRow>)}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                count = {topicList.length}
                                page = {page}
                                rowsPerPage = {rowsPerPage}
                                onPageChange = {handleChangePage}
                                onRowsPerPageChange = {handleChangeRowsPerPage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
        </TableContainer>
        </>
}