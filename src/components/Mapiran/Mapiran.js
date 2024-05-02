import { Box, Grid, Slide } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { datamapiran } from './datamap'
import './index.css'

export default function Mapiran() {

        // const [count, setCount] = useState(20);
      
        // useEffect(() => {
        //   const interval = setInterval(() => {
        //     if (count < 3100) {
        //       setCount(prevCount => prevCount + 40);
        //     } else {
        //       clearInterval(interval);
        //     }
        //   }, 100);
      
        //   return () => clearInterval(interval);
        // }, [count]);

    const [citey,setCitey]=useState("استان تهران والبرز 1560 دانش آموز")
    const hamndelmosecity=(A)=>{
setCitey(A)
    }
  
  return (

    <Box className='containerloacation'>

<Box >
<svg  className='containeriran' height="500" version="1.1" width="550" xmlns="http://www.w3.org/2000/svg">
  
  
  {datamapiran.map(item=>{
   return   <a xlinkHref="" xlinkTitle={item.xlinkTitle} onMouseEnter={()=>hamndelmosecity(item.xlinkTitle)}>
      <path class={item.class} d={item.d} stroke-width={item.strokewidth} stroke-opacity={item.strokeopacity} transform={item.transform}>
      </path>
    </a>
  })}
    
</svg>
<Box className='boxasaliparkangi'>
<Grid  container>

<Box className='containerprakangi'>
    
<Grid className='boxcolor' item></Grid>
    <Grid className='itemgrid' item>بیشترین پراکندگی دانش آموز</Grid>
</Box>
<Box>
    
    <Grid className='boxcolor2' item></Grid>
        <Grid className='itemgrid' item>کمترین پراکندگی دانش آموز</Grid>
    </Box>
    <Box>
    
<Grid className='boxcolor3' item></Grid>
    <Grid className='itemgrid' item>میانگین پراکندگی دانش آموز</Grid>
</Box>
    </Grid>

  <Box>
    

  </Box>
</Box>
</Box>


<Box className='boxtext'>
    <h1>تعداد دانش آموزان فعال 6521 نفر</h1>
    <h2>ما در 29 شهرایران  بوده ایم</h2>
    <h4>استان {citey}</h4>
</Box>

</Box>

  )
}