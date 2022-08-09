export default function App() {
  return (
    <>
      <div class="container mx-auto">
        <div className="w-[1440px] bg-[#0d192b] flex h-screen">
          <div className="flex w-1/4 h-[60%] bg-[#14253d] m-auto rounded-2xl">
            <div className="container w-[88%] h-[92%] mx-auto my-6">
              <img id='img' className='object-contain object-top rounded-lg cursor-pointer 'src={require('./images/image-equilibrium.jpg')} alt="equilibrium"/>
              <header id="asdf" className="text-white text-2xl cursor-pointer my-4 hover:text-[#00fff7]">
                Equilibrium #3429
              </header>
              <p className="text-[#8bacda] text-base">
                Our Equilibrium collection promotes<br/>balance and calm.
              </p>
              <div className="flex my-4 border-b-0">
                <img src={require('./images/icon-ethereum.svg').default} className="object-scale-down" alt="Ethereum icon" />
                <span className="text-[#00fff7] mx-2">0.041 ETH</span>
                <img src={require('./images/icon-clock.svg').default} className="object-scale-down ml-[7.65em]" alt="clock icon" />
                <span className="text-[#8bacda] mx-1">3 days left</span>
              </div>
              <div className='bg-[#8bacda] w-[100%] h-[1px]'></div>
              <div className="flex my-3">
                <img src={require('./images/image-avatar.png')} className="w-[30px] h-[30px] border border-white rounded-full" alt="" />
                <p className="text-[#8bacda] mx-2">Creation of <span className='text-white cursor-pointer hover:text-[#00fff7]'>Jules Wyvern</span></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}