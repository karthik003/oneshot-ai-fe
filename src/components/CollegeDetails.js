import React,{forwardRef,useEffect,useState} from 'react'
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { useHistory,useLocation } from "react-router-dom";

import Typography from "@material-ui/core/Typography";


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



  const MyNewTitle = ({ text, variant }) => (
  <Typography
    variant={variant}
    style={{
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }}
  >
    {text}
  </Typography>
);

function CollegeDetails(match ) {
    const history = useHistory();
    const location = useLocation();
    const [tableRowOpen,setTableRowOpen] =useState(false)
    useEffect(()=>{
        console.log("state",location.state)
    })
    const collegeColumns=[
        { title: 'Year Founded', field: 'year_founded'},
        { title: 'City', field: 'city'},
        { title: 'State', field: 'state'},
        { title: 'Country', field: 'country'},
        { title: 'No. of Students', field: 'no_of_students'},
        { title: 'Courses', field: 'courses'},

      ]
    
      const collegeData=[
        { year_founded: '2000', city: 'Vizag', state: 'AP',country:'India',no_of_students:500,courses:'CSE,ECE' }
      ]


      const studentColumns =[
        { title: 'Name', field: 'name'},
        { title: 'Batch Year', field: 'year_of_batch'},
        { title: 'College id', field: 'college_id'},
        { title: 'Skills', field: 'skills'},

      ]
    const studentData=[
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
        { name: 'Robin', year_of_batch: '2000', college_id: '123', skills: 'C,Cpp'},
    ]

    const displayStudDeets =()=>{
        history.push({
            pathname: `/student/${123}`,
            state: {

            },
          });
    }
    return (
        <div style={{color:"white",paddingBottom:"30px"}}>
            <div style={{fontSize:"40px"}}>College Name</div><br />

        <Grid container  style={{justifyContent:"center"}}>
        <Grid item xs={8} >
                <MaterialTable
                    icons={tableIcons}
                    title={<MyNewTitle variant="h6" text="College Details" />}
                    columns={collegeColumns}
                    data={collegeData}
                    options={{
                    search:false,
                    selectableRows: false,
                    print: false,
                    download: false,
                    viewColumns: false,
                    headerStyle: {
                        textAlign:"center",
                        justifyContent:"center",            
                        backgroundColor: "#4E4E82",
                        color: "#fff",
                    },
                    cellStyle:{
                        textAlign:"center",
                    },
                    rowStyle:{
                        backgroundColor: "#f7f7f7"                    
                    },

                    paging:false

                    }}
                    


                />
                </Grid>
                
                <Grid item xs={8} >                
                    <br /><br /><br />
                    <div style={{fontSize:"40px"}}>List of Students</div><br />
                <MaterialTable
                    icons={tableIcons}
                    title={<MyNewTitle variant="h6" text="Student List" />}
                    columns={studentColumns}
                    data={studentData}
                    onRowClick={displayStudDeets}
                    options={{
                    search:false,
                    selectableRows: false,
                    print: false,
                    download: false,
                    viewColumns: false,
                    headerStyle: {
                        textAlign:"center",
                        justifyContent:"center",            
                        backgroundColor: "#4E4E82",
                        color: "#fff",
                    },
                    cellStyle:{
                        textAlign:"center",
                    },
                    rowStyle:{
                        backgroundColor: "#f7f7f7"                    
                    },
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

export default CollegeDetails
