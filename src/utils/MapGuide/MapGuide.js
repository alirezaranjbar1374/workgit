import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import StorageIcon from '@mui/icons-material/Storage';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AndroidIcon from '@mui/icons-material/Android';
import BarChartIcon from '@mui/icons-material/BarChart';
import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
export default function MapGuide() {
  return (
    <Box className="boxrodmap">
      <Typography className='textmap' variant='h4'>نقشه راه برنامه نویسی</Typography>
      <Grid container style={{ textAlign: "center" }} >
      
          <Grid item xl={3} md={4} lg={3}   xs={12}>
          <Link to={`mapprogramdetil/${"data"}`}>
            <Box className="one">
              <Box>
              <StorageIcon className='iconstyle' fontSize='large' />

              </Box>
              <Box>
              <Typography className='textboxmap' variant='h3'>دیتا</Typography>

                </Box>
                <Box>
                <Typography className='textboxmap' variant='h3'>4 دوره</Typography>

                </Box>
            </Box>
            </Link>
          </Grid>
        
       
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"backend"}`}>

          <Box className="two">
            <Box>
            <CodeIcon className='iconstyle' fontSize='large' />

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>بک اند </Typography>

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>5 دوره</Typography>

            </Box>

          </Box>
          </Link>
        </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"bi"}`}>
          <Box className="five">
            <Box>
            <BarChartIcon className='iconstyle' fontSize='large' />
            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>هوش تجاری</Typography>
            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>3 دوره</Typography>

            </Box>

            


          </Box>
          </Link>
        </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"scority"}`}>
          <Box className="three">
            <Box>
            <VpnKeyIcon className='iconstyle' fontSize='large' />
            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>امنیت</Typography>

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>2 دوره</Typography>

            </Box>
          </Box>
          </Link>
        </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"scority"}`}>
          <Box className="six">
            <Box>
            <SportsEsportsIcon className='iconstyle' fontSize='large' />
            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>بازی</Typography>

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>2 دوره</Typography>

            </Box>
          </Box>
          </Link>
        </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
          <Link to={`mapprogramdetil/${"frontend"}`}>
            <Box className="one">
              <Box>
              <HtmlIcon className='iconstyle' fontSize='large' />
              </Box>
              <Box>
              <Typography className='textboxmap' variant='h3'>فرانت</Typography>

              </Box>
              <Box>
              <Typography className='textboxmap' variant='h3'>5 دوره</Typography>

              </Box>
              
            </Box>
            </Link>
          </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"system"}`}>
          <Box className="four">
            <Box>
            <LaptopChromebookIcon className='iconstyle' fontSize='large' />

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>سرور</Typography>

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>3 دوره</Typography>

            </Box>
          </Box>
          </Link>
        </Grid>
        <Grid item xl={3} md={4} lg={3} xs={12}>
        <Link to={`mapprogramdetil/${"system"}`}>
          <Box className="seven">
            <Box>
            <AndroidIcon className='iconstyle' fontSize='large' />

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>اندروید</Typography>

            </Box>
            <Box>
            <Typography className='textboxmap' variant='h3'>3 دوره</Typography>

            </Box>
          </Box>
          </Link>
        </Grid>
   
     
      </Grid>
    </Box>
  )
}