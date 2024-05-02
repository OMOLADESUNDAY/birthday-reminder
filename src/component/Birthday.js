import React from 'react'

const Birthday = ({birthe}) => {
    const {name,img,age}=birthe
  return (
    <div className=''>
       
        <div className='birthdayDetail'>
            <img src={img} width='80px' className='img' height='80px' alt="birthday" />
            <div>
            <h3>{name}</h3>
            <h6>{age}'s years old</h6>
            </div>
        </div>
    </div>
  )
}

export default Birthday