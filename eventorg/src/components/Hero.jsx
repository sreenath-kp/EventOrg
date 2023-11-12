
import backgroundImage from '../assets/bg.jpeg';
import {AiOutlineSearch} from 'react-icons/ai'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
			<div className='flex-col justify-center items-center mt-4 font-poppins text-5xl text-white font-semibold text-center'>
				<div className='flex-col justify-center items-center'>
					<p><span className='text-[#E3670C]'>Search Book</span> and <span className='text-[#E3670C]'>Add</span> an <span className='text-[#E3670C]'>Event</span></p>
					<p> All in one place!</p>
				</div>
				<div className='relative flex justify-center items-center mt-8'>
					<AiOutlineSearch className='absolute left-64 text-[#E3670C] text-2xl'/>
					<input className='rounded-3xl text-[#000000CC] text-4xl py-2 px-4 w-3/5 pl-4'type='text' placeholder='Search for events...'/>
				</div>
			</div>
    </div>
  )
}

export default Hero