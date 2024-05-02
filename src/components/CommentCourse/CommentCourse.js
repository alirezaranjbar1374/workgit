import { Box, Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './commentcourse.css'
import InfintCommentCourse from '../infintCommentCourse/InfintCommentCourse'

export default function CommentCourse({id}) {
  console.log("rexiveeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",id);
    const [listComment,setListComment]=useState([])
    const FetchCommentarticel= async()=>{
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/user/getAllCommentsforClinnt`).then(res=>{
              console.log("FetchCommentarticel",res.data);
              const filterdData=res.data.filter(item=>item.course===id)
            
              // setListComment(filterdData.sort((a, b) => b.date.localeCompare(a.date)))
      
      
      
              function mapReplies (comment) {
                return {
                  id: comment._id,
                  text: comment.text,
                  course:comment.course,
                  like:comment.like,
                  dislike:comment.dislike,
                  liked:comment.liked,
                  disliked:comment.disliked,
                  UserName:comment.UserName,
                  date:comment.date,
      
       
                  children: comment.children.map(replyId => {
                    const reply = filterdData.find(c => c._id === replyId);
                    return reply ? mapReplies(reply) : null;
                  }).filter(Boolean)
                }
              }
            
              const myMappedArray = filterdData.filter(c => !c.parent).map(mapReplies);
            
              console.log("myMappedArray2", myMappedArray);
              setListComment(myMappedArray)
      
      
          }).catch(err=>{
              console.log("err",err);
          })
       }
      
       useEffect(() => {
setTimeout(() => {
  
  FetchCommentarticel()
}, 1000);
    }, [id])
  return (
    <Box  >
  
    {listComment.length>0&&  <h4 className='titlecoment'>نظرات</h4>}


{/* <Infinscrool1  id={id} data={listComment}/> */}

 
 <InfintCommentCourse  data={listComment} id={id}/>
    








  </Box>

    
  )
}