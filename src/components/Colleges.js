import React,{forwardRef,useEffect,useState} from 'react'
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import TablePagination from '@material-ui/core/TablePagination';

import MaterialTable from 'material-table'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
function Colleges(props) {
    const history = useHistory();

    const [tableRowOpen,setTableRowOpen] =useState(false)
    useEffect(()=>{
        
    })
    const columns=[
        { title: 'Name', field: 'name' },
        { title: 'Year Founded', field: 'year_founded' },
        { title: 'City', field: 'city'},
        { title: 'State', field: 'state'},
        { title: 'Country', field: 'country'},
        { title: 'No. of Students', field: 'no_of_students'},
        { title: 'Courses', field: 'courses'},

      ]
    const data=[
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },
        { name: 'Mehmet', year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' },


    ]

    const displayColDeets =(rowData)=>{
        history.push({
            pathname: `/college/${123}`,
            state: {
                data:rowData
            },
          });
    }
    return (
        <div style={{height:"120vh"}}>
        <Grid container  style={{justifyContent:"center"}}>
        <Grid item xs={8} >
                <MaterialTable
                    icons={tableIcons}
                    title="Report List"
                    columns={columns}
                    data={data}
                    onRowClick={(event, rowData)=>displayColDeets(rowData)}
                    options={{
                    selectableRows: false,
                    print: false,
                    download: false,
                    viewColumns: false,
                    headerStyle: {
                        backgroundColor: "#4E4E82",
                        color: "#fff",
                    },
                    rowStyle: x => {
                        // if (x.tableData.id % 2) {
                        //     return {backgroundColor: "#f7f7f7"}
                        // }
                        return {backgroundColor: "#f7f7f7"}                    
                    }
                    }}

                    components={{
                        Pagination: props => (
                            <TablePagination
                                {...props}
                                rowsPerPageOptions={[5, 10]}
                                />
                    ),
                        }}
                />
                </Grid>
                </Grid>

        </div>
    )
}

export default Colleges
