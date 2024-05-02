import { Box, Card, TextField,Grid, TextareaAutosize, Button, Typography, Container } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import RtlContainer from "../../utils/RtlContainer/RtlContainer";
import './contentus.css'
import axios from "axios";
import { useEffect, useState } from "react";
import BreadcrumbBase from "../../utils/BreadcrumbBase/BreadcrumbBase";
import _ from "lodash";
// import captchapng from "captchapng";
const CountentUs=()=>{
    const [imagbase,setImagbase]=useState("")
    const [coatchanum,setCoatchanum]=useState("")
    const [privccode,setPrivicode]=useState()
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [phonenumber,setPhonenumber]=useState("")
    const [categori,setCategori]=useState("")
    const [textbody,setTextBody]=useState("")
    const [isTyping, setIsTyping] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsTyping(false);
    //     }, 500);

    //     return () => clearTimeout(timer);
    // }, []);



    useEffect(() => {
     
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/recptcha`).then(res=>{
            console.log("res",res);
     setImagbase(res.data.img)
     setCoatchanum(res.data.CAPTCHA_NUM)
        })
   



    }, [])

    

   const sendcontentus=e=>{
    e.preventDefault()
    console.log("slm",privccode);
//     function validateEmail(emailField){
//         var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//         if (reg.test(emailField) === false) 
//         {
//             alert('لطفا ایمیل را بصورت صحیح وارد کنید');
//             return false;
//         }else{
            
  
//         }

//         return true;

// }
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(coatchanum==privccode  && reg.test(email)===true ){



    alert("کپچا درست است ")
    

    const body={
        "UserEmail":email,
        "UserName":name,
        "UserNumber":phonenumber,
        "UserCategori":categori,
        "UserText":textbody
    }


        axios.post(`${process.env.REACT_APP_BASE_URL}/user/creatmeesagesaite`,body).then(res=>{
            console.log("res",res);
        }).catch(err=>{
            console.log("err",err);
        })


    console.log("body",body);
}
else{
    alert("کپچا درست نیست")
}




   }

   const handleOnChange = _.debounce((change,params) => {
    console.log(change);
    if (params=="name"){
        setName(change)
            }
    if(params==="email"){
        setEmail(change)

    }
    if(params==="phone"){
        setPhonenumber(change)
    }
    if(params==="textbody"){
        setTextBody(change)
    }

  }, 1000);

    return(
        <RtlContainer >
            <Container >
            <BreadcrumbBase one="اندیش لرن" two="تماس با ما" three="آدرس شرکت"/>

            </Container>

            <Grid container  sx={{textAlign:"center",display:"flex",alignItems:"center" ,justifyContent:"center"}}>

            <Grid className="gird-form" item  sx={{margin:10}} lg={6} md={6} xl={6} sm={12} xs={12} >
    <Grid sx={{margin:3}} xl={12} >
    <TextField    onChange={event => handleOnChange(event.target.value,"name")} className="alit"   label="نام ونام خانوادگی" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"},marginTop:3}}  variant="outlined" color="success"  />

    </Grid>
    <Grid sx={{margin:3}} xl={12}>
    <TextField  onChange={event => handleOnChange(event.target.value,"email")}  label="ایمیل" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} variant="outlined" color="success"  />

</Grid>
<Grid sx={{margin:3}} xl={12}>
    <TextField  onChange={event => handleOnChange(event.target.value,"phone")} label="شماره موبایل" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} variant="outlined" color="success"  />

</Grid>
<Grid sx={{margin:3}} xl={12}>
    {/* <TextField label="ایمیل" sx={{"& .MuiInputLabel-outlined":{fontFamily:"tanha",fontSize:"14px",color:"skyblue"}}} variant="outlined" color="success"  /> */}
<select onChange={(e)=>setCategori(e.target.value)} className="dastebandicountent">
<option value="دسته بندی">دسته بندی</option>
    <option value="مالی">مالی</option>
    <option value="درخواست مشاوره">درخواست مشاوره</option>
    <option value="پشتیبانی">پشتیبانی</option>
    <option value="همکاری">همکاری</option>
    <option value="سایر موارد">سایر موارد</option>


</select>
</Grid>

{       <img src={`data:image/jpeg;base64,${imagbase}`} />
}
<Grid sx={{margin:0}} xl={12}>

    <TextField  value={privccode}
    className="textcode"
onChange={(e)=>setPrivicode(e.target.value)}
     sx={{"& .MuiInputLabel-outlined":{fontFamily:"inherit",fontSize:"14px",color:"skyblue"}}} label="کد امنیتی را وارد کنید" variant="standard" color="success"   />

</Grid>
<Grid sx={{margin:0}} xl={12}>

<TextareaAutosize  

  aria-label="empty textarea"
  className="alit"
  cols={window.innerWidth>480?100:20}
  placeholder="هرچه میخاهد دل تنگت بگو"  onChange={event => handleOnChange(event.target.value,"textbody")}
  style={{ width:{sm:"20px",xl:"600",lg:"400"} ,height:"100px",fontFamily:"tanha",fontSize:"14px",paddingTop:"20",borderRadius:"3px",marginTop:"10px"}}
/>
</Grid>


<Button className="btnsend" onClick={sendcontentus} variant="contained" size="large"  startIcon={<SendIcon />}>
  ارسال
</Button>
</Grid>

<Grid item sx={{textAlign:"center",alignItems:"center"}} lg={6} md={6} xl={6} sm={12} xs={12}>
    <Typography variant="h4" className="titlelocation" >موقعیت ماکانی ما</Typography>
    <div>
    <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6483.612038305087!2d51.386036250498336!3d35.65715060626115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1669544365490!5m2!1sfa!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
</Grid>
            </Grid>


        </RtlContainer>
    )
}
export default CountentUs;