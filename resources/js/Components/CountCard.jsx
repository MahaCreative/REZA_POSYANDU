import React from 'react'
export default function CountCard({title, count, icon}){
	return (

		<div className='rounded-md bg-green-500 text-white py-2 px-3 w-full'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-sm md:text-2xl lg:text-5xl font-bold'>{count}</p>
                                <p className='text-xs md:text-sm lg:text-md font-thin'>Jumlah {title}</p>
                            </div>

                        </div>
                     
                    </div>
		)
}