import React,{forwardRef,useEffect,useState} from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer,Cell } from 'recharts';
import { Button, Radio } from 'antd';
import Colleges from './components/Colleges'
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  
  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
  ];
  const COLORS = ['#8884d8', '#448AFD', '#2B7A52','#4FAFAE'];

function Main() {
    const [tableType,setTableType] =useState('college')
    const handleCollegeClick=()=>{
        setTableType('college');
    }
    const handleCourseClick=()=>{
        setTableType('course')
    }
    return (
        <div style={{color:"white",fontFamily:"Verdana"}}>
            <div style={{fontSize:"40px"}}>
                Indian Colleges
            </div>
            <div style={{justifyContent:"center",display:"flex"}}>
                <div>
                    <PieChart width={500} height={400} style={{textAlign:"center"}}>
                    <Pie
                        dataKey="value"
                        labelLine={true}
                        isAnimationActive={false}
                        data={data01}
                        cx={230}
                        cy={200}
                        outerRadius={150}  
                        fill="#8884d8"       
                    >
                        {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                    </Pie>
                        <Tooltip />
                        </PieChart>
                        <Button type="default" shape="round" onClick={handleCollegeClick} >
                                College Details
                        </Button>    
                </div>
                <div>
                    <PieChart width={500} height={400} style={{textAlign:"center"}}>
                    <Pie
                        dataKey="value"
                        labelLine={true}
                        isAnimationActive={false}
                        data={data01}
                        cx={230}
                        cy={200}
                        outerRadius={150}  
                        fill="#8884d8"       
                    >
                        {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                    </Pie>
                        <Tooltip />
                        </PieChart>
                        <Button type="default" shape="round" onClick={handleCourseClick} >
                                Course Details
                        </Button>    
                </div>
                </div>
                        
                <br /><br />
                {tableType==="college"?
                    <Colleges />:<Colleges />    
            }




        </div>
    )
}

export default Main
