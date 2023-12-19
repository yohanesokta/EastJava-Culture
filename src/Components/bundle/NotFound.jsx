import { useEffect } from 'react'
import Title from '../title'
function NotFound(){
  useEffect(()=>{
    setTimeout(()=>{
      window.location.href = "/"
    },3000)
  })
  return(<>
            <Title string="East Java Culture | Awokwokwok Not Found" />
    <p style={{margin:"20px", color:"gray"}}>(404) pages tidak tersedia , ini akan kembali ke home dalam 3 detik</p>
  </>)
}

export default NotFound