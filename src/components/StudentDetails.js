import React,{useEffect,useState} from 'react'
import { useHistory,useLocation } from "react-router-dom";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Card,Row, Col } from 'antd';
const { Meta } = Card;



function StudentDetails(match ) {
    const location = useLocation();
    useEffect(()=>{
        //console.log("state",location.state)
    })

    let skillsStr = location.state.data.skills;
    var skills=""
    for(const key in skillsStr){
        skills+=skillsStr[key]
        if(key< Object.keys(skillsStr).length-1){
            skills+=","
        }else{
            break;
        }
    }
        const title=(
        <div style={{fontSize:"20px",textAlign:"center"}}>
        <div>Name: {location.state.data.name}</div>
        <div>Batch Year: {location.state.data.year_of_batch}</div>
        <div>Skills: {skills}</div>
        </div>
    )

    return (
        <div className="card" style={{color:"white",paddingBottom:"30px",height:"100vh",paddingTop:"70px"}}>
                <div style={{fontSize:"40px"}}>Student Details</div><br />

                <Row type="flex" align="middle">
                    <Col span={24}>
                        <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Card
                                style={{ width: 400 }}
                                cover={<AccountCircleIcon style={{ display: 'inline-block', verticalAlign: 'middle',height:"300px",width:"300px" }}/>}
                            >
                                <Meta title={title} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            
        </div>
    )
}

export default StudentDetails
