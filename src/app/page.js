import Pie from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Productos from '@/Components/Productos'
import Tarjetas from '@/Components/tarjetas'


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-2'>
      <Navbar />
     

      <br />
      <Tarjetas />
      
      <br /> 
      <Productos /> 

      <br />
      <Pie />
    </main>
  )
}
