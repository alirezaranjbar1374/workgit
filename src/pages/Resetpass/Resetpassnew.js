import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useParams , useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { decodeToken } from '../../utils/DecodeToken'
import './resetpass.css'

export default function Resetpassnew(e) {
    const params=useParams()
  const navigate = useNavigate();

    const emailresali=decodeToken(params.token).payload.id
        console.log("emailresali",emailresali);

    
    
        
        const [email,setEmail]=useState("")
        const [againemail,setAgainemail]=useState("")
        const submitrest=(e)=>{
            e.preventDefault()
            if(email.length<5 || email.length>13 || againemail.length>13 || againemail.length<5){
                swal({
                    title:"نباید کمتر از 5 حرف و بیشتر از 13 حرف انتخاب شود",
                    icon:"error",
                    buttons:"متوجه شدم"
                })
            }else{
                if(email===againemail){
    
                    const body={
                        password:againemail,
                        email:emailresali
                    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/user/registerrest`,body).then(res=>{
        
        console.log("resrest",res);
        
          swal({
                    title:"رمز عبور با موفقیت تغییر یافت لطفا با پسورد جدید وارد سایت شوید",
                    icon:"success",
                    buttons:"متوجه شدم"
                })
              navigate("/login")

    }).catch(err=>console.log("err",err))
    
                }else{
                    swal({
                        title:"هردو مقدار باید یکسان باشد",
                        icon:"error",
                        buttons:"متوجه شدم"
                    })
                }
    
    
            }
    
        }
      return (
    <div className="Container-login">  
            <div className="main">  	
    
    
                <div className="login1">
                    <form >
                        <label  className="label1" for="chk" >تغییر رمز عبور</label>
                        
    
    
                        <input  value={email} onChange={(e)=>setEmail(e.target.value)}    className={"input-login"} type="text" name="email" placeholder="رمز عبور جدید" required=""/>
                        <input value={againemail} onChange={(e)=>setAgainemail(e.target.value)}  className={ "input-login"} type="text" name="text" placeholder="تکرار رمز عبور" required=""/>
    
                        <button  onClick={submitrest}  className="resetpass" type="submit" >ثبت</button>
    
                    </form>
                    <div >
                        <Link to="/login">
    
                        <h3 className='sub'>ورود/ثبت نام</h3>
    
    
                        </Link>
                    </div>
                </div>
        </div>
        </div>
      )
}
