import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { Button, Grid } from '@mui/material'
import './table.css'
import TaskForm from './TaskForm';


const options = {
    filterType: 'checkbox',
    print: false,
    search: false,
    sort: false,
    download: false,
    filter: false
};

function Table() {
    const [open, setOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSubmit = (data) => {
        setTasks([...tasks, data])
        setOpen(false)
    }


    const columns = [
        {
            name: "slNo",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <p>{tableMeta?.rowIndex + 1}</p>
                    )
                }
            }
        },
        {
            label: "Task Details",
            name: "taskDetails",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(value,tableMeta,updateValue)
                    return (
                        <p>{tableMeta?.rowData[tableMeta?.columnIndex]}</p>
                    )
                }
            }
        },
        {
            label: "Start Date",
            name: "startDate",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(value, 'valuee')
                    return (
                        <p>{tableMeta?.rowData[tableMeta?.columnIndex]}</p>
                    )
                }
            }
        },
        {
            label: "End Date",
            name: "endDate",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <p>{tableMeta?.rowData[tableMeta?.columnIndex]}</p>
                    )
                }
            }
        },
        {
            label: "Assignee",
            name: "asignee",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <p>{tableMeta?.rowData[tableMeta?.columnIndex]}</p>
                    )
                }
            }
        },
        {
            label: "Status",
            name: "status",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <p>{tableMeta?.rowData[tableMeta?.columnIndex]}</p>
                    )
                }
            }
        }

    ]

    return (
        <>
            <Grid container justifyContent='flex-end'>
                <Button onClick={handleOpen} >Add New Task</Button>
            </Grid>
            <Grid item>
                <MUIDataTable
                    title={"Tasks List"}
                    data={tasks}
                    columns={columns}
                    options={options}
                />
            </Grid>
            <TaskForm open={open} setOpen={setOpen} handleSubmit={handleSubmit} />
        </>
    )
}

export default Table
