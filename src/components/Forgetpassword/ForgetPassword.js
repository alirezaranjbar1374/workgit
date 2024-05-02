import  axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import jwt from 'jsonwebtoken';

import './forget.css'
import { useDispatch } from 'react-redux';
import { addUser } from './../../redux/action/User';
import { decodeToken } from './../../utils/DecodeToken';
import swal from 'sweetalert';

const ForgetPass = () => {
    const [email,setEmail]=useState("")
	const [chek,setCheck]=useState("chk")
	const [code,setCode]=useState("")
	const [showinput,setShowinput]=useState("input-disable")
	const [resive,setResivee]=useState(false)
	let navigate = useNavigate();
	

// console.log("tokendata",tokendata);
// console.log("fafafa",decodeToken(tokendata).payload.id);

	const user={
		email,
	}
    const handlesendCode=(event)=>{
		event.preventDefault();
      
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/loginbeforeVerfy`,user).then(res=>{
			console.log("resvreifay",res);
     if(res.status===200){
		 alert("ایمیلی حاوی کد امنیتی برای شما ارسال شد  امکان دارد این ایمیل در اسپم باکس نیز قرار گیرد ")
	setResivee(true)

		

	 }




      
        }).catch(err=>{
            swal({
				title:err?.response?.data?.message,
				icon:"error",
				buttons:"متوجه شدم"
			})
		
        })
    
	}


	const handleVerifaycode=(event)=>{
		event.preventDefault();
		
        const coderesali={
            code,
		

        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/verifayUser`,coderesali).then(res=>{
			console.log("resvreifay",res);
     if(res.status===200){
		 alert("کد وارد شده صحیح است لطفا اقدام به تغییر پسورد خود نمایید")
		 const tokendata=jwt.sign({id:email},"JWT_SECRET",{expiresIn:"1h"})
	setEmail("")
		 navigate(`/ResetPasword/${tokendata}`);

		//  dispatch(addUser(decodeToken(res.headers["x-auth-token"]).payload))


		 
	// setResivee(true)
	// setEmail("")
		

	 }




      
        }).catch(err=>{
            console.log("err",err);
              if(err?.response?.data===false){
  swal({
				title:"کد وارد شده صحیح نمیباشد",
				icon:"error",
				buttons:"متوجه شدم"
			})

		

	 }
		
        })
    
	}




	const click=()=>{
        console.log("clicl");
    }
    return ( 
        <div className="Container-login">  
        <div className="main">  	


			<div className="login1">
				<form onSubmit={!resive ?handlesendCode :handleVerifaycode}>
					<label onClick={click} className="label1" for="chk" >بازیابی رمزعبور </label>
					{/* <input type="checkbox" id={chek} /> */}


					<input   value={email} onChange={(e)=>setEmail(e.target.value)}  className={resive!=true ? "input-login":"input-login input-disable"} type="email" name="email" placeholder="ایمیل" required=""/>
					<input   value={code} onChange={(e)=>setCode(e.target.value)} className={resive===true ? "input-login":"input-login input-disable"} type="text" name="text" placeholder="کد ارسالی را وارد کنید" required=""/>

					<button  style={{fontSize:"14px"}} type="submit"  className={resive===true ? "button-sub input-disable":"button-sub"}>ارسال کد یکبار مصرف به شماره تلفن</button>
					<button  type="submit" className={resive!=true ? "button-sub input-disable":"button-sub"}>کد ارسالی را وارد کنید</button>

				</form>
				<div className="containerlink">
					<Link to="/login">

					<h3>ورود/ثبت نام</h3>


					</Link>
				</div>
			</div>
	</div>
    </div>
     );
}
 
export default ForgetPass;