import { Box, Card, Container, Grid, Slide, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CopyClidBord from '../../utils/CopyClipBord/CopyClidBord'
import UserDetil from '../User-detil/UserDetil'
import './grop.css'

export default function Groupmedia() {
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    
  setLoading(true)
    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <Box className='boxcontainer' height="65vh" style={{display:"flex",borderRadius:'5px',textAlign:"center",alignItems: 'center'}}>
           
            <UserDetil/>
            <Slide direction="right" in={loading}
              mountOnEnter unmountOnExit
            >
            <Box sx={{width:'100%',margin:"5%",textAlign:"center"}}>
          <Card>
              <Box sx={{padding:"25px",margin:"3%"}}>
            
                  <Typography className='boxcontainer' variant="h4">گروهای تلگرامی</Typography>
                  <hr/>
                
              </Box>
              <Container sx={{display:"flex",justifyContent:"space-around",padding:"20px",border:"1px solid black"}}>
                  <Typography className='boxcontainer' variant="h6">گروه جی اس</Typography>
                

                  <CopyClidBord valuea="http://localhost:3000/groupmedia100">
          
          <Typography className='boxcontainer'  variant="h6"><a href='' className='href' target >لینک</a></Typography>

          </CopyClidBord>


              </Container>
              
              <Container sx={{display:"flex",justifyContent:"space-around",padding:"20px",border:"1px solid black"}}>
                  <Typography className='boxcontainer' variant="h6">گروه پایتون</Typography>
                

                  <CopyClidBord valuea="http://localhost:3000/groupmedia10">
          
                <Typography  variant="h6"><a href='' className='href' target >لینک</a></Typography>

                </CopyClidBord>

              </Container>
              <Container sx={{display:"flex",justifyContent:"space-around",padding:"20px",border:"1px solid black"}}>
                  <Typography className='boxcontainer' variant="h6">گروه ری اکت</Typography>
                

                  <CopyClidBord valuea="http://localhost:3000/groupmedia10">
          
                <Typography  variant="h6"><a href='' className='href' target >لینک</a></Typography>

                </CopyClidBord>

              </Container>

          </Card>
            </Box>
            </Slide>

        
  
        </Box>
  )
}