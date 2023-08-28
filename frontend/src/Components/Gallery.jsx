import React from 'react'

const Gallery = () => {
    return (
        <div>
            <div class="bg-[#121129] mt-10 py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-extrabold text-white md:mb-6 lg:text-3xl">Browse our latest news</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-400 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>

                    <div class="mx-auto max-w-screen-lg grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                        <div class="flex flex-col overflow-hidden rounded-[35px]  bg-[#282454]">

                            <a href="#" class="group relative block h-48 overflow-hidden  md:h-48">
                                <img src="post1.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <div class="flex  items-center justify-left ">
                                <span class="px-4 relative -top-3 ml-4 py-1 bg-[#6639e4] text-white text-xs uppercase rounded-2xl">Products</span>
                            </div>


                            <div class="flex flex-1 flex-col px-4 pb-4">
                                <h2 class="mb-4 text-lg font-extrabold text-white">
                                    <a href="#" class="transition duration-100 hover:text-blue-300 active:text-indigo-600">What is the most best and secure crypto wallet of 2023?</a>
                                </h2>

                                <p class="mb-4  text-md text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor</p>
                                <span class="border-b border-gray-600 mb-4"></span>
                                <div class="mt-auto  flex items-end justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img src="profile1.jpg" loading="lazy" alt="Photo by peter bucks" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span class="font-semibold text-sm uppercase text-white">ALEX TURNER</span>
                                            <span class="block text-sm uppercase text-gray-300">September 1, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-[35px]  bg-[#282454]">

                            <a href="#" class="group relative block h-48 overflow-hidden  md:h-48">
                                <img src="post2.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <div class="flex  items-center justify-left ">
                                <span class="px-4 relative -top-3 ml-4 py-1 bg-[#6639e4] text-white text-xs uppercase rounded-2xl">Tutorial</span>
                            </div>


                            <div class="flex flex-1 flex-col px-4 pb-4">
                                <h2 class="mb-4 text-lg font-extrabold text-white">
                                    <a href="#" class="transition duration-100 hover:text-blue-300 active:text-indigo-600">How to trade crypto tokens from your phone</a>
                                </h2>

                                <p class="mb-4  text-md text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor</p>
                                <span class="border-b border-gray-600 mb-4"></span>
                                <div class="mt-auto  flex items-end justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img src="profile2.jpg" loading="lazy" alt="Photo by peter bucks" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span class="font-semibold text-sm uppercase text-white">John Carter</span>
                                            <span class="block text-sm uppercase text-gray-300">September 1, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col overflow-hidden rounded-[35px]  bg-[#282454]">

                            <a href="#" class="group relative block h-48 overflow-hidden  md:h-48">
                                <img src="post3.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                            </a>
                            <div class="flex  items-center justify-left ">
                                <span class="px-4 relative -top-3 ml-4 py-1 bg-[#6639e4] text-white text-xs uppercase rounded-2xl">Apps</span>
                            </div>


                            <div class="flex flex-1 flex-col px-4 pb-4">
                                <h2 class="mb-4 text-lg font-extrabold text-white">
                                    <a href="#" class="transition duration-100 hover:text-blue-300 active:text-indigo-600">5 great crypto apps you should not be missing out</a>
                                </h2>

                                <p class="mb-4  text-md text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor</p>
                                <span class="border-b border-gray-600 mb-4"></span>
                                <div class="mt-auto  flex items-end justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img src="profile3.jpg" loading="lazy" alt="Photo by peter bucks" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <span class="font-semibold text-sm uppercase text-white">Sophie Moore</span>
                                            <span class="block text-sm uppercase text-gray-300">September 1, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                                <button className='bg-[#282454] uppercase px-8 text-xs py-5 rounded-[35px] text-white'>View All Articles</button>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
