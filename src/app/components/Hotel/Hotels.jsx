import React from 'react'
import { client } from "../../../../sanity/lib/client"
import HotelDisplay from './HotelDisplay'

const query = `*[_type == "hotels"]`;

const Hotels =async () => {

    const hotels = await client.fetch(query);

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 md:mx-24 mx-8 mb-24 gap-8'>
        {hotels.map((hotel)=>{
            return(
                <HotelDisplay hotel={hotel} key={hotel._id} />
            )
        })}
    </div>
  )
}

export default Hotels