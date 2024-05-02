import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Container, Button, AccordionActions } from "@mui/material";
import "./index.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Drft from './../DRFT/Drft';
import Detilcours from "../DetilCourse/Detilcours";
import axios from "axios";
import { useSelector } from "react-redux";
const Courses = (props) => {
  const [data, setDta] = useState([]);
  const [price, setPrice] = useState("");
const [videodata,setVideodata]=useState([])
const [namecourse,setNameCourse]=useState("")
const [idcourse,setIdCourse]=useState("")
const [teacher,setTeacher]=useState("")
  const params = useParams();
  // console.log("params",params.id);
  useEffect(()  => {
    if (props.name === params.id) {
      // console.log("ppop1222222222222222", props);
      setDta(props.video);
      setPrice(props.price);
      setNameCourse(props.name)
      setIdCourse(props._id)
      setTeacher(props.teacherAdmin)
if(idcourse !=""){
  fetchvideodata()

}
   
    }
    
  }, [data]);




  // let arr = [];
// console.log("props",props);
const userbasket=useSelector(state=>state.USERreducer)
const usercourse=userbasket.basket?.course.map(item=>item.name)
const chekpermison=usercourse?.includes(namecourse)
const emailchek=useSelector(state=>state.USERreducer)?.email
const emailchektrue=emailchek?emailchek:"behsazan@gmail.com"
let urlpermison=chekpermison?`${process.env.REACT_APP_BASE_URL}/AllTeacher/showVideo/${idcourse}/${emailchektrue}`:`${process.env.REACT_APP_BASE_URL}/AllTeacher/showVideo/${idcourse}/${emailchektrue}`
// console.log("chekpermison",chekpermison);
// console.log("urlpermison",urlpermison);
  const navigate = useNavigate();

  const fetchvideodata=async()=>{await axios.get(urlpermison).then(res=>{
      setVideodata(res.data)
  // console.log("resvideo",res.data);

  }).catch(err=>{
    console.log("err",err);
  })}

  // console.log("data",data);
  const addTocart = () => {
    navigate(`/cart/${namecourse}`);
  };



  return (
    <>
    
    <div
      className="course_bg"
      style={
        price.length === 0
          ? { display: "block" }
          : {
              display: "flex",
            
              padding: "2px",
              width: "100%",
              justifyContent: "space-around",
            }
      }
    >
      <div
        className="course_DEtil"
        style={
          price.length === 0
            ? { display: "none" }
            : { padding: "2px", width: "100%" }
        }
      >
        <Grid>
          <Box
            style={{
              border: "1px ",
              padding: "0.5rem",
              margin: "0.5rem",
            }}
          >
            <h1 className="titleCourse">{props.name}</h1>
       
              مدرس دوره:<span>{teacher}</span>
            
<div>
وضعیت دوره :<h3 className="stusdes">درحال برگزاری...</h3>

</div>
            <Detilcours description={props.description}/>
            <Container>
              <Container  className="containerprice" >
                <p>
                  <span > قیمت دوره:</span>{" "}
                  <h3 className="titleprice" style={{ color: "black" }}>{price.toLocaleString('fa-IR')}</h3>تومان
                </p>

                {price.length === 0 ? (
                  ""
                ) : (
                  <Button fullWidth
                    style={{
                      background: "green",
                      color: "#ffff",
                      padding: "23px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontFamily:"tanha"
                    }}
                    onClick={addTocart}
                  >
                    افزودن به سبد خرید
                  </Button>
                )}
              </Container>
            </Container>
          </Box>

        </Grid>

        <div className="containeraccoring" >
          <ul>
            {videodata.map((item, index) => (





              <li key={item._id}>

            
                  <p
            
                  >
                  </p>
             


<div style={{direction:""}}>
        <Accordion className='acored_text'>
          <AccordionSummary  
          
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='containeracorindbox'
          >
            <div className="boxparameter">
              <Typography className="titlevideoacordin" variant="h6" style={{textAlign:"center"}} >{item.title}</Typography>
              {/* <span>{index + 1}</span> */}



              </div>


    
          </AccordionSummary>

          <AccordionDetails>
            <>
         {item.video?   <ReactPlayer
                      width="100%"
                      height="100%"
                      light={true}
                      controls
                      url={item.video}
                      style={{width:"64px",height:"64px"}}
                    />:<p>برای مشاهده ویدو باید دوره خریداری شود</p>}
            </>
            
          </AccordionDetails>

          <AccordionDetails>
     {item.dec}
        </AccordionDetails>
        <AccordionActions>
          <Typography className="timevideo" variant="h6">{item.timeVideo} دقیقه</Typography>
          {/* <Button></Button> */}
        </AccordionActions>


        </Accordion>
 
  
      </div>

                  
              </li>
            ))}
          </ul>

        </div>

        
      </div>
    </div>
   

    </>
    
  );
};

export default Courses;