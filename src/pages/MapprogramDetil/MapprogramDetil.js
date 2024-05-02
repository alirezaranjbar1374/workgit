import './index.css'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Container } from '@mui/material';
import RtlContainer from '../../utils/RtlContainer/RtlContainer';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function MapprogramDetil() {

  const [coursedata,setCourseData]=useState([])
  const params=useParams()
  console.log("PARAMS",params.id)

      

      const datacourse=()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/getlistteacher`).then(res=>{
          console.log("rescourse",res.data.map(item=>item.course).flat(Infinity));
          setCourseData(res.data.map(item=>item.course).flat(Infinity))
        }).catch(err=>{
          console.log("err",err);
        })
      }
      useEffect(() => {
        datacourse()
      }, [])
    

    const coursedatadata=[
        {id:"1",title:"html",des:"html یک زبان اشاره گذاری است که برای وب کاربرد دارد و ...",
    course:coursedata.filter(item=>item.title==="html")
    ,totaltime:"350",color:"success",
    categori:"frontend",
  class:"oneacr"
  },
    {id:"2",title:"css",des:"css برای رنگ و لعاب دادن به سایت و کار ماسن ما همیشه ازو...",
    course:coursedata.filter(item=>item.name==="css")
    ,totaltime:"50",color:"grey",categori:"frontend",class:"twoacr"
    
    },
    {id:"3",title:"js",des:"وحالا جی اس برای فرهنگ و شخصیت کار است دقیقت مغز سایت ما که...",
    course:coursedata.filter(item=>item.name==="js")
    ,totaltime:"50",color:"success",categori:"frontend",class:"oneacr"
    
    },
    {id:"4",title:"react",des:"ری اکت فریمورک جذاب من و زبایی سایت این بار این کارماست و عاشقانه میبردو...",
    course:coursedata.filter(item=>item.name==="react")
    ,totaltime:"50",color:"grey",categori:"frontend",class:"twoacr"
    
    },

    {id:"5",title:"redux",des:"برای مدیریت state ها نیاز دارین این فرهنگ را...",
    course:coursedata.filter(item=>item.name==="redux")
    ,totaltime:"55",color:"success",categori:"frontend",class:"oneacr"
    },

    {id:"6",title:"next",des:"برای سِِو سایت ما نیاز داریم این مورد را عمیقا درک کنیم کهو...",
    course:coursedata.filter(item=>item.name==="next")
    ,totaltime:"55",color:"grey",categori:"frontend",class:"twoacr"
    },
    {id:"7",title:"زبان بک اند",des:" قدم اول انتخاب زبان برنامه نویس برای بک اند  مانند  nodejs,php,java,#C,golang,...است همه این زبان ها و...",
    course:coursedata.filter(item=>item.name==="nodejs")
    ,totaltime:"55",color:"success",categori:"backend",class:"twoacr"
    },
    {id:"8",title:"فریمورک بک",des:"شروع یادگیری  فریمورک بک اند مانند express,nest,jango,dot.net,espring,... برای  نوشتن کد های بهینه",
    course:coursedata.filter(item=>item.name==="دوره جامع java")
    ,totaltime:"55",color:"grey",categori:"backend",class:"oneacr"
    },
    {id:"9",title:"database",des:"برای ذخیره سازی دیتا نیاز به  دیتابیس است که بایدsql یا nosql باشد",
    course:coursedata.filter(item=>item.name==="nodejs")
    ,totaltime:"55",color:"success",categori:"backend",class:"twoacr"
    },
    {id:"10",title:"git",des:"برای توسعه بهتر نرم افزار نیاز مند ابزار هایی مانند gitوgitlabوgithb",
    course:coursedata.filter(item=>item.name==="git")
    ,totaltime:"55",color:"grey",categori:"backend",class:"oneacr"
    },
    {id:"11",title:"موارد پیشرفته",des:" حالا وقتشه بیای موارد پیشرفته رو یادبگیری مثل docker,apollo,websocket,webserver,...",
    course:coursedata.filter(item=>item.name==="nodejs")
    ,totaltime:"25",color:"success",categori:"backend",class:"twoacr"
    },
    
    {id:"12",title:"دیتابیس",des:"برای شروع هوش تجاری نیازه تو انواع دیتا بیس بخصوص سینتکس sql رو خوب بدونی",
    course:coursedata.filter(item=>item.name==="bi")
    ,totaltime:"25",color:"success",categori:"bi",class:"twoacr"
    },
    
    {id:"13",title:"ssms",des:"مدیریت sql  و بهینه سازی دیتا",
    course:coursedata.filter(item=>item.name==="bi")
    ,totaltime:"25",color:"grey",categori:"bi",class:"oneacr"
    },
    {id:"14",title:"ssis",des:"",
    course:coursedata.filter(item=>item.name==="nodejs")
    ,totaltime:"25",color:"success",categori:"bi",class:"twoacr"
    },
    {id:"15",title:"ssas",des:"",
    course:coursedata.filter(item=>item.name==="nodejs")
    ,totaltime:"25",color:"grey",categori:"bi",class:"twoacr"
    },



      ]

       
   
  return (
    <RtlContainer >

    <Box className="containerbox">

 
    <Container style={{height:"auto"}} className="containerbox">
    <Typography className="titlevideoacordin" variant="h4" style={{textAlign:"right"}} > شروع</Typography>

<Timeline  position='alternate' >
    {coursedatadata.filter(item=>item.categori===params.id).map(item=>{
        return    <TimelineItem > 
        <TimelineOppositeContent color="text.secondary">
            
        <Accordion className={`acored_text ${item.class}`}>
              <AccordionSummary  
              
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className='containeracorindbox'
              >
                <div className="boxparameter" style={{textAlign:"center"}}>
                  <Typography className="titlevideoacordin" variant="h6" style={{textAlign:"center"}} >آموزش {item.title}</Typography>
                  {/* <span>{index + 1}</span> */}
    
    
    
                  </div>
    
    
        
              </AccordionSummary>
    
              <AccordionDetails style={{textAlign:"center"}}>
                <>
          
                      <p className="titlevideoacordin">
                        {item.des}
                      </p>
                </>
                
              </AccordionDetails>
    
              <AccordionDetails style={{textAlign:"center"}}>
                <div style={{display:"flex",flexWrap:"nowrap" ,justifyContent:"space-around"}}>
    
              
                {item.course.map(item=>{
                   return <div container >
                    
                <img className='imgacordion'  style={{borderRadius:"50%"}} src={item.pic}/>
                <Typography variant='body1' className="titlevideoacordin" style={{color:"blue"}}>{item.name}</Typography>
               
    
                    </div>
                })}
                </div>
      
            </AccordionDetails>
            <AccordionActions>
              <Typography className="timevideo" variant="h6"> {item.totaltime}:دقیقه</Typography>
              {/* <Button></Button> */}
            </AccordionActions>
    
    
            </Accordion>
    
    
    
            </TimelineOppositeContent>  
        <TimelineSeparator>
        <TimelineDot  color={item.color} />
        <TimelineConnector  />
        
    
        </TimelineSeparator>
        
        <TimelineContent>
            <Typography className="titleltext" variant='h5'>{item.title}</Typography>
        </TimelineContent>
    
        </TimelineItem>
    
    })}
  
    
     
    </Timeline>
    <Typography className="titlevideoacordin" variant="h4" style={{textAlign:"right"}} >پایان</Typography>

        </Container>

        </Box>
        </RtlContainer>
  )
}