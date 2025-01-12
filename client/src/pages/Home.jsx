import Navbar from '../components/Navbar'
// import img1 from '../assets/c3.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import {Button} from '@mui/material';


import imgg from '../assets/T/t3.jpg'
import t1 from '../assets/Cat/t1.jpg'
import t2 from '../assets/Cat/t2.jpg'
import t3 from '../assets/Cat/t3.jpg'
import t4 from '../assets/Cat/t4.jpg'
import t5 from '../assets/Cat/t5.jpg'
import t6 from '../assets/Cat/t6.jpg'
import t7 from '../assets/Cat/t7.jpg'
import t8 from '../assets/Cat/t8.jpg'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightIcon from '@mui/icons-material/Straight';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Home() {
  const [isDrop,setIsDrop]=useState(false)
  const [location,setLocation]=useState('')
  const [money,setMoney]=useState('')
  const [type,setType]=useState(0)
  const [fav,setFav]=useState(false)
  const [imageArrow ,setImageArrow]=useState(false)
  const [imageNumber,setImageNumber]=useState(1)

  // const imgs1=[t1,t2,t3,t4]
  // const imgs2=[t1,t2,t3,t4]
  // const imgs3=[t1,t2,t3,t4]
  // const imgs4=[t1,t2,t3,t4]

  // const [counter,setCounter]=useState(1)
  
  const Cardd=(props)=>{
    return(
      <div className='w-[350px] lg:max-lgg:w-[340px] shadow-2xl rounded-lg '>
        {/* for image part */}

         <div onMouseEnter={()=>setImageArrow(true)} onMouseLeave={()=>setImageArrow(false)}  className='flex flex-col justify-between p-2 h-[190px] bg-cover	w-[350px] lg:max-lgg:w-[340px] rounded-t' 
             style={{
            ...(imageNumber===1 && {backgroundImage:`url(${props.imgg1})`} ), 
            ...(imageNumber===2 && {backgroundImage:`url(${props.imgg2})`} ), 
            ...(imageNumber===3 && {backgroundImage:`url(${props.imgg3})`} ), 
            ...(imageNumber===4 && {backgroundImage:`url(${props.imgg4})`} ) 

              }}>
          <div className='flex justify-between'>
            <button className=' px-4  rounded-md font-semibold text-white  ' style={{ backgroundColor:`${props.bcolor}`}} >
              {props.bname}
            </button>
            <div className= ' camera text-white  px-2 rounded-md  '>
              <CameraAltOutlinedIcon sx={{ marginRight:1 }} fontSize='small' /> 4
            </div>
          </div>

          { imageArrow && <div className='flex justify-between pt-6 '>
              <button onClick={()=>{if(imageNumber>1){setImageNumber((e)=>e-1)} }}>
                 <KeyboardArrowLeftIcon sx={{color:'#FF6531' ,fontSize:33}}/>
              </button>
              <button onClick={()=>{if(imageNumber<4){setImageNumber((e)=>e+1)}}}>
                <KeyboardArrowRightIcon  sx={{color:'#FF6531', fontSize:33}}/>
              </button>
            </div>
          }

          <div className=' flex pl-32'>
            <div className='flex items-center text-white pr-16 pt-10'>
                <button onClick={()=>setImageNumber(1)} style={{...( imageNumber===1 && {color:'#FF6531'})}} ><AdjustOutlinedIcon/></button>
                <button onClick={()=>setImageNumber(2)} style={{...( imageNumber===2 && {color:'#FF6531'})}}> <AdjustOutlinedIcon/></button> 
                <button onClick={()=>setImageNumber(3)} style={{...( imageNumber===3 && {color:'#FF6531'})}}> <AdjustOutlinedIcon/> </button>
                <button onClick={()=>setImageNumber(4)} style={{...( imageNumber===4 && {color:'#FF6531'})}}><AdjustOutlinedIcon/> </button>
            </div>
            <div className=' flex flex-col gap-1 place-self-end'>
                <IconButton onClick={()=>setFav((e)=>!e)} sx={{height:27,  backgroundColor:'white' ,color:'black', borderRadius:1, '&:hover':{backgroundColor:'white'}}}>
                 {!fav ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon  sx={{ color:'red' }} /> }
                </IconButton>
                <IconButton sx={{height:27,  backgroundColor:'white' ,color:'black', borderRadius:1, '&:hover':{backgroundColor:'white'}}}>
                <ShuffleIcon fontSize='small'/>
                </IconButton>
            </div>
          </div>

         </div>
        
        {/* the text part */}
         <div className='p-4'>
          <span className='text-gray-500 font-semibold tracking-wide text-[16px] '>BOLE</span>
          <h1 className='font-bold text-lg'>Two Bed Room villa</h1>
          <p className='text-[#FF6531] font-bold text-base '>12,000*</p>
          <p className=' text-gray-500 font-sans text-[15px] font-semibold'>In Publishing and Graphic design, Lorem ipsum is a placeholder text
             commonly used to demonstrate the visual form of a document or a typeface 
             without.
          </p>
          <div className='flex justify-between mt-3'>
            <div className='flex font-semibold items-center gap-1'><BedIcon />  Bed : {props.bedNo} <div className='h-4 w-[1px] bg-black ml-2'></div> </div>
            <div className='flex font-semibold items-center gap-1'><BathtubIcon />  Bath : {props.bathNo} <div className='h-4 w-[1px] bg-black ml-3'></div> </div>
            <div className='flex font-semibold items-center'><CallSplitIcon />Sq Ft : {props.kare}  </div>
          </div>
          <div className='flex justify-between mt-3 items-center'>
            <span className='text-gray-500 font-semibold'  >{props.date}</span>
            <span className=' border border-black	rounded-2xl border-dashed px-4 py-1  text-gray-500 font-semibold'><button >Details</button></span>
          </div>
         </div>
      
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-16'>
     
      <section className="partOne h-[630px] max-ml:h-[700px] bg-no-repeat" >
      <div className='insideOne'>
        <Navbar />
        <div >
            <div className=' flex flex-col items-center px-[15%] gap-7 pt-[4%]'>
              <h1 className=' font-bold text-3xl text-center text-white '> Sale Buy and Rent Your Gorgeous Dream Houses in Ethiopia</h1>
              <p className='text-white font-medium text-center text-lg'> Sale, buy and rent beutifull and secured houses in ethiopia in wherever you want in addis abeba.
                  you dont need waste your time and energy just for looking your home, we will do it for you honestly!
              </p>
            
            <div className=''>
            <button onClick={()=>setIsDrop((e)=>!e)} className=' bg-[#ff6900] px-5 py-1 rounded-full font-bold text-2xl'> Rent <ArrowDropDownIcon fontSize='large' /></button>
            
              { isDrop &&  <div className=' bg-white w-[100px] py-1 flex flex-col items-center text-center ml-[18%] '>
                <ul >
                    <li><a href='/auth'>Sale/rented</a></li>
                    <li><a href='/auth'>Rent/buy</a></li>

                  </ul>   
              </div>}
            
            </div>  
            
            
            
            </div>
          
            <div className=' flex flex-col items-center gap-6 mt-16 max-ml:gap-3 max-ml:mt-5'>
              <h1 className=' text-white font-semibold  text-2xl'>Get Your Type</h1>
              
              <div className='flex flex-row  max-ml:grid max-ml:grid-cols-2  max-ml:gap-1 gap-5 text-white text-lg font-semibold max-ml:text-md max-sm:text-sm'>
                <span>
                  <a href='/' onMouseOver={()=>setType(1)} onMouseLeave={()=>setType(0)}>Normal House</a>
                  {type ===1 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
                </span>
                <span>
                  <a href='/' onMouseOver={()=>setType(2)} onMouseLeave={()=>setType(0)}>Compound House</a>
                  {type ===2 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
                </span>         
                <span>
                  <a href='/' onMouseOver={()=>setType(3)} onMouseLeave={()=>setType(0)}>Villa</a>
                  {type ===3 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
                </span>              <span>
                  <a href='/' onMouseOver={()=>setType(4)} onMouseLeave={()=>setType(0)}>Condominiuim</a>
                  {type ===4 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
                </span>
                <span>
                  <a href='/' onMouseOver={()=>setType(5)} onMouseLeave={()=>setType(0)}>Guest House</a>
                  {type ===5 && <div className='h-1 rounded-lg bg-white mt-1'></div>}
                </span>   
                <span>
                  <a href='/' onMouseOver={()=>setType(6)} onMouseLeave={()=>setType(0)}>Apartment</a>
                  {type ===6 && <div className='h-1 rounded-lg bg-white mt-1 '></div>}
                </span>  
              </div>

              <div className=' h-20 bg-white shadow-xl  flex  flex-row p-5  sm:max-ml:px-2  max-sm:flex-col max-sm:h-32 max-sm:gap-2 ' >
                <div className='border-black border-2 w-96 sm:max-lg:w-64 h-10 flex flex-row justify-center items-center xs:max-sm:w-[98%]'>
                {!location && <SearchSharpIcon /> }
                  <input 
                  onChange={(e)=>setLocation(e.target.value)}
                  value={location}
                  placeholder='Search by location'
                  style={{ outline:'none',fontWeight:'bolder', color:'black' }}
                  />
                  {location && <IconButton onClick={()=>setLocation('')}> <CloseIcon /></IconButton>}
                </div>
                <div className='border-black border-2 w-96 sm:max-lg:w-64 h-10  flex flex-row sm:max-ml:justify-start justify-center items-center font-semibold xs:max-sm:w-[96%]'>
                <input
                  value={money}
                  onChange={(e)=>setMoney(e.target.value)} 
                  placeholder='By Money amount'
                  style={{ outline:'none',fontWeight:'bolder', color:'black' }}/>
                  {money &&<IconButton onClick={()=>setMoney('')}> <CloseIcon /></IconButton>}

                </div>              
                <button className='bg-[#ff6900] px-7 sm:max-ml:px-3 font-semibold text-xl ml-1 '>Search</button>
              </div>



            </div>
        </div>
      </div>   
      </section>

                 
      <section className='partTwo h-[440px] m-8 xs:max-sm:h-[800px]'>
        <div className='insideTwo   '>
          <div className=' Two w-[100%] h-[440px] xs:max-sm:h-[800px] text-white flex flex-col gap-6 justify-center items-center '>
            <h1 className='text-2xl font-semibold'>How it Work</h1>
            <p className='w-[60%] text-center'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            <button className='px-8 py-2 text-lg font-semibold bg-gradient-to-r  from-orange-700 to-orange-500 rounded-3xl'>Submit Properties</button>
            <div className='flex flex-row gap-5 xs:max-sm:flex-col xs:max-sm:gap-1'>
              <div className='w-36 h-28 border-[1px] rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                <HouseOutlinedIcon sx={{color:'white', fontSize:60}}/>
              </div>
              <div className='w-36 h-28 border-[1px] rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                <AddHomeOutlinedIcon sx={{color:'white', fontSize:60}}/>
              </div>     
              <div className='w-36 h-28 border-[1px] rounded-tl-3xl rounded-br-3xl flex items-center justify-center'>
                <VpnKeyOutlinedIcon sx={{color:'white', fontSize:60}}/>
              </div>
            </div>
          
          </div>
        </div>
      </section>
     

     <section className='px-3 py-2  flex flex-col items-center  '>
      <h1 className='font-bold text-2xl pb-5'> All Type Of Home</h1>
       <div className='Type grid grid-cols-3 xs:max-sm:grid-cols-1 sm:max-lg:grid-cols-2 justify-items-center	 justify-center items-center  '>

           <div >
            Apartment
            <img src={t1} className='h-[220px] w-[300px]'/>
           </div>
          
           <div>
            Villa
            <img src={t2}  className='h-[260px] w-[350px]'/>
           </div>
          
           <div className='h-[220px] w-[300px]'>
            Guest House
            <img src={imgg} />
           </div>
           
           <div>
            Condominuim
            <img src={t5}   className='h-[260px] w-[350px]'/>
           </div>
           
           <div>
            Compound
            <img src={t4} className='h-[220px] w-[300px]'/>
           </div>
           
           <div>
            Single House
            <img src={t6}  className='h-[260px] w-[350px]' />
           </div>
       </div>
     </section>

    
     <section className='flex flex-row justify-center gap-7 max-ml:flex-col max-ml:p-3'>
      <div className='flex w-[40%] gap-3 max-ml:w-[100%] ml:max-lg:w-[55%]' >
         <img src={t8} className='w-[50%]'/>
         <div className='flex flex-col gap-3'>
         <img src={t1}  className='h-[50%]' />
         <img src={t7}  className='h-[50%]' />
         </div>
      </div>

      <div className='w-[38%] max-ml:w-[100%] flex flex-col gap-4'>
           <h1 className='text-3xl font-bold max-md:text-2xl '>Discover about Apartment</h1>
           <p className=' text-lg max-md:text-base'>
           is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
           with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
           <button className=' w-36 mt-3 py-2 bg-[#FF6531] text-lg font-semibold text-white hover:bg-gradient-to-r from-[#e68363] to-[#c95d2f] '>Read More</button>
      </div>
     </section>


     <section className='flex flex-col items-center justify-center gap-2 '>
       <h1 className='text-2xl font-semibold text-[#FF6531]'>Latest properties Listing</h1>
       <p className='text-gray-600 text-center '>Discover in Addis abeba best things to do, restaurant, theater ,night life and more.</p>
       <div className='grid grid-cols-3 gap-7 max-md:grid-cols-1 md:max-lg:grid-cols-2'>
             <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              />
               <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              />
               <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              /> 
              <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              /> 
              <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              />
               <Cardd 
              imgg1={t2}
              imgg2={t3}
              imgg3={t1}
              imgg4={t5}
              bname='Sale'
              bedNo='4'
              bathNo='2'
              kare='5000'
              bcolor='#FF6531'
              date='August 4,2025'
              />
      
      
      
      
       </div>
  
     </section>

     <section className=''>
      <h1></h1>
      <p></p>
      <div></div>

     </section>
 
  </div>
  )
}

export default Home