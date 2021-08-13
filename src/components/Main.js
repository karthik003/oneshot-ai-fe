import React,{forwardRef,useEffect,useState} from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer,Cell } from 'recharts';
import { Button } from 'antd';

import Colleges from './Colleges'
import axios from 'axios'

import './Main.css'

  //const COLORS = ['#8884d8', '#448AFD', '#2B7A52','#4FAFAE'];
  const COLORS = ['#E04A3F', '#448AFD', '#FFD34E', '#9B479F'];
const CustomTooltip = ({ payload }) => {
    //console.log("payload",payload?.[0]?.payload)
    return (
        <div style={{backgroundColor:"white",color:"black",padding:"10px 10px"}}>
          <b>{payload?.[0]?.payload?.name}</b>:{payload?.[0]?.payload?.value}
          <span >
            <p>{payload?.[0]?.payload?.percentage} %</p>
          </span>
        </div>
    );
  };
function Main() {
    const [tableType,setTableType] =useState('college')
    const [collByState, setCollByState] = useState([])
    const [collByCourse, setCollByCourse] = useState([])
    const [allColleges, setAllColleges] = useState([])
    const [stateWiseColleges, setStateWiseColleges] = useState([])
    const [allCourses, setAllCourses] = useState([])
    useEffect(()=>{
        axios.get('https://oneshot-ai-be.herokuapp.com/college/statescount')
        .then((res)=>{
            const statesArr=[]
            for(const key in res.data){
                statesArr.push({
                    name:key,
                    value:res.data[key],
                    percentage:((res.data[key]*100)/Object.keys(res.data).length).toFixed(0)
                })
            }
            setCollByState(statesArr)
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get('https://oneshot-ai-be.herokuapp.com/college/coursescount')
        .then((res)=>{
            const coursesArr =[]
            for(const key in res.data){
                coursesArr.push({
                    name:key,
                    value:res.data[key],
                    percentage:((res.data[key]*100)/Object.keys(res.data).length).toFixed(0)

                })
                if(coursesArr.length>20){
                    break;
                }
            }
            setCollByCourse(coursesArr)
        })
        .catch((err)=>[
            console.log(err)
        ])

        axios.get('https://oneshot-ai-be.herokuapp.com/college/all')
        .then((res)=>{
           //console.log(res.data)
            const collArr =[]
            const courseArr=[]
            res.data.map((data,index)=>{
                collArr.push({
                    name:data.name,
                    city:data.city,
                    country:data.country,
                    // no_of_students:data.no_of_students,
                    no_of_students:100,
                    state:data.state,
                    year_founded:data.year_founded,
                    courses :  data.courses,
                    id:data._id
                })
            })
            setAllColleges(collArr)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const handleCollegeClick=()=>{
        setTableType('college');
    }
    const handleCourseClick=()=>{
        setTableType('course')
    }
    const injectStateData=(entry)=>{
        //console.log("entry",entry)
        let stateColls = []
        stateColls = allColleges.filter(res=>res.state===entry.name)
        //console.log("stateColls",stateColls)
        setStateWiseColleges(stateColls)
    }
    return (
        <div style={{color:"white",fontFamily:"Verdana"}}>
            <div style={{fontSize:"40px"}}>
                Indian Colleges
            </div>
            <div style={{justifyContent:"center",display:"flex"}}>
                <div>
                    <PieChart width={500} height={400} style={{textAlign:"center"}}>
                    {collByState.length>0 && 
                    <Pie
                        dataKey="value"
                        labelLine={true}
                        isAnimationActive={true}
                        data={collByState}
                        cx={230}
                        cy={200}
                        outerRadius={150}  
                        fill="#8884d8"
                        label       
                    >
                        {collByState.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{cursor:"pointer"}}onClick={()=>injectStateData(entry)}/>
                            ))}
                    </Pie>}
                        <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                        <h3 style={{color:"white"}}>Colleges by State</h3>
                        <div onClick={handleCollegeClick} >
                                <a style={{cursor:"auto"}}>(Click on any sector to view the colleges in that state)</a>
                        </div>    
                </div>

                <div>
                    <PieChart width={500} height={400} style={{textAlign:"center"}}>
                    <Pie
                        dataKey="value"
                        labelLine={true}
                        isAnimationActive={true}
                        data={collByCourse}
                        cx={230}
                        cy={200}
                        outerRadius={150}  
                        fill="#8884d8"
                        label       
                    >
                        {collByCourse.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                    </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                        <h3 style={{color:"white"}}>Colleges by Course</h3>
                </div>
                </div>
                        
                <br /><br />
                {tableType==="college"?
                     <Colleges data={stateWiseColleges.length===0?allColleges:stateWiseColleges}/>:<Colleges data={allCourses}/>    
            }   



        </div>
    )
}

export default Main
