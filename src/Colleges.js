import React,{forwardRef,useEffect,useState} from 'react'
import { Grid, IconButton, Tooltip } from "@material-ui/core";

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
    useEffect(()=>{
        
    })
    const columns=[
        { title: 'Adı', field: 'name' },
        { title: 'Soyadı', field: 'surname' },
        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
        { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
      ]
    const data=[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]
    return (
        <div style={{height:"120vh"}}>
        <Grid container  style={{justifyContent:"center"}}>
        <Grid item xs={8} >
                <MaterialTable
                    icons={tableIcons}
                    title="Report List"
                    columns={columns}
                    data={data}
                    // actions={[
                    //   (rowData) => ({
                    //     icon: () => ratingUpAction(rowData),
                    //     tooltip: "Like",
                    //     onClick: (event) => alert("You want to add a new row"),
                    //   }),

                    //   (rowData) => ({
                    //     icon: () => ratingDownAction(rowData),
                    //     tooltip: "Dislike",
                    //     onClick: (event) => alert("You want to add a new row"),
                    //   }),
                    // ]}
                    options={{
                    selectableRows: false,
                    print: false,
                    download: false,
                    viewColumns: false,
                    headerStyle: {
                        backgroundColor: "#666666",
                        color: "#fff",
                    },
                    rowStyle: x => {
                        if (x.tableData.id % 2) {
                            return {backgroundColor: "#f7f7f7"}
                        }
                    }
                    }}
                    // localization={{
                    //   header: {
                    //     actions: "Rating",
                    //   },
                    // }}
                />
                </Grid>
                </Grid>

        </div>
    )
}

export default Colleges