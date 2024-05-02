import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { addTocart, removeFromCart } from './../../redux/action/CartAction';
import { Card, Container, Button,Typography,DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog, Grid, CardActionArea, CardMedia, CardContent, CardActions } from '@mui/material';

import  axios  from 'axios';
import { Box } from '@mui/material';
import { addUser, clearUser } from './../../redux/action/User';
import { decodeToken } from './../../utils/DecodeToken';
import Diyalog from './../../components/Diyalog/Diyalog';
import { isEmpty } from "lodash";
import CheekOnline from "../../utils/Cheekingonline/Cheekonline";
import swal from "sweetalert";


const Cart = (props) => {

    const [opendiylog, setopendiylog] =useState(false);
    const [uId,setUId]=useState("")
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [aval,SetAval]=useState([])
    const [idparams,setIdparams]=useState("")



    const navigate = useNavigate();


    const handleClickOpen = (id) => {
    

        setopendiylog(true);
        setUId(id)
      
    
    
        
    
      };
      const handleClosedyalog = () => {
        setopendiylog(false);
      };

      const user=useSelector(state=>state.USERreducer)
     
console.log(!isEmpty(user));
    const params= useParams()
    const courseId=params.id
const cart= useSelector((state)=>state.cart)
const cartItems=cart
console.log("cartItems1",cartItems.cartItems);
    const dispatch=useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/getlistteachernew`);
              // console.log("resone", response.data);
              SetAval(response.data);
              
              const findId = response.data?.find(item => item.name === params.id)?._id;
              console.log("findId", findId);
              setIdparams(findId);
        
            } catch (error) {
              console.log("err", error);
            }
          };
        
          fetchData();



        if(idparams){
        dispatch(addTocart(idparams))
        }
            // Update network status
<CheekOnline isOnline={isOnline} setIsOnline={setIsOnline} />
    }, [isOnline,dispatch,idparams])


console.log("avalavalaval",aval);

    const DeletFromCart=()=>{
        dispatch(removeFromCart(uId))
        setopendiylog(false);
    }
    const course1= cartItems.cartItems.map(item=>{
        return{
        name:item.name,
        courseId:item.product,
        price:item.price
        }
    })
    console.log("ww",course1);
const handleCartSubmit= async()=>{
    if(isOnline==false){
        swal({
            title:"دسترسی به اینترنت ندارید لطفا بررسی کنید",
            icon:"error",
            buttons:"متوجه شدم"
        })

        return false
    }
    if(!isEmpty(user)==false){
        swal({
            title:"ابتدا باید لاگین کنید",
            icon:"error",
            buttons:"متوجه شدم"
        })
      setTimeout(() => {
        navigate("/login")
      }, 3000);
    }else{
        const sendCart={
            course:course1
         
        }
      
         console.log("sendcart",sendCart);
        const header = {
                
            headers: {
                "x-auth-token":localStorage.getItem("token-login")
    
            //   "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhYmU3M2JmYmE0NTMyZWNlMWUxNTciLCJyb2xlIjoidXNlciIsImlhdCI6MTY1NzQ1NDIzOX0.2qnn23bi6qATfmmofjtokrzlkba6CYyk018IHL_sl6Y"
        
               }
               
         };
           await axios.post(`${process.env.REACT_APP_BASE_URL}/user/updateBasket`,sendCart,header).then(res=>{
                console.log("resbasket",res);
    
            }).catch(err=>{
                // console.log("err",err);
            })
        
            hanelsubmitfromcash()
            const token=localStorage.getItem("token-login")
    
            const decodedToken=decodeToken(token)
                dispatch(addUser(decodedToken.payload))

    }


  
   
   

}
const hanelsubmitfromcash=()=>{
    const header = {
            
        headers: {
          "x-auth-token":localStorage.getItem("token-login")

    
           }
           
     };
    axios.get(`${process.env.REACT_APP_BASE_URL}/user/checkoutbasket`,header).then(res=>{
        // console.log("res checkbasket",res);
        window.location.assign(res.data.url)
        localStorage.removeItem("cartItems")
      


    }).catch(err=>{
        console.log("error checkbasket",err);
    })
}
    return (
        <Container>

        <Grid  container  sx={{display:"flex",height:{xs:cartItems.cartItems.length>2?"110vh":"80vh",sm:"80vh",md:"60",lg:"60"},margin:"10px",alignItems:"center",justifyContent:"space-around",zIndex:-2,overflowX:"hidden"}}>
            
          <Grid  xs={12} sm={12} md={12} lg={12} xl={12} sx={{display:"flex",flexFlow:"wrap"}}>
          {cartItems.cartItems.length==0?<h1>سبد خرید خالی است </h1>:
            
            
            cartItems.cartItems.map(item=>(
<Box >  
                <Card className="btn-pay"  sx={{ maxWidth: 270,margin:"4px" }}>
          

              
                <CardActionArea  >
                <Link   to={`/course/${item.product}`}>
                  <CardMedia  
                    component="img"
                  
                    sx={{height:{xs:"50",sx:"100",lg:"300px"}}}
                    image={item.pic}
                    alt="green iguana"
                  />
                      </Link>
                  <CardContent  sx={{height:{xs:"30",sx:"30",md:"60",lg:"70px",xl:"70"}}} >
                    <Typography   variant="h5">
                    {item.name}
                    </Typography>
                    <Typography   variant="button">
                    مدرس:{item.teacherAdmin}
                    </Typography>
                    <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <Typography variant="body2">{item.timeCourse}ساعت آموزش</Typography>
                    <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <Typography variant="h6" color="green">
                  {item.price.toLocaleString('fa-IR')  }         
                     </Typography>
                     <Typography className='price_box_last_courses'  variant="body2" color="black">
                    {item.price.toLocaleString('fa-IR')}           
                     </Typography>
                    </Box>
                    </Box>
               
              
                  </CardContent>
                </CardActionArea>
                <CardActions   >
                    <Box>
                    <Button   onClick={()=>handleClickOpen(item.product)} className='card_articel' size="medium" color="inherit" sx={{background:"red"}}>
              پاک کردن
                  </Button>
                    </Box>
              
                </CardActions>
            
              </Card>
              <Diyalog name={item.name} handleClosedyalog={handleClickOpen} opendiyalog={opendiylog}>
             
             <DialogContent>
             <DialogContentText >
    
           پاک کردن دوره {course1.find(item=>item.courseId===uId)?.name} ازسبدخرید
    
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button style={{color:"#ffff",background:"green",fontSize:15}} autoFocus onClick={handleClosedyalog}>
             نه منصرف شدم
              </Button>
              <Button style={{color:"#ffff",background:"red" ,margin:10,fontSize:17}} onClick={DeletFromCart}> پاک کردن</Button>
            </DialogActions>
             </Diyalog>


     
 </Box>
             ))
            }
          </Grid>
          <Grid   sx={{marginBottom:"40px"}} xs={12} sm={12} md={12} lg={12} xl={12}>
 
                        
                        <Card  sx={{padding:{xs:"1px",sm:"14px",md:"20px",lg:"20px",xl:"20px"}}} style={{border:"2px solid black",borderRadius:5,position:"relative",zIndex:-1 }} >    <Typography   variant="h4" >مجموع سبد خرید:{cartItems.cartItems.reduce((acc,item)=>acc + item.price,0).toLocaleString('fa-IR')}تومان</Typography>        </Card>
                        {cartItems.cartItems.length===0?null:<Button sx={{margin:"3px"}}  className="btn-pay" color="success" size="large" variant="contained"  onClick={handleCartSubmit} >پرداخت</Button>}    

          </Grid>
                


    


        </Grid>
        </Container>

      );
}
 
export default Cart;