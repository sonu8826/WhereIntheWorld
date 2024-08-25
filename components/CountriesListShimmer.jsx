import React from 'react'
import './CountriesListShimmer.css'

const CountriesListShimmer = () => {
  const mapped = Array.from({length : 10}).map((ele,i) =>{
      return <div key={i} className='country-card shimmer-card'></div>
  })
  return (
    <div className='countries-container'>
        {
          mapped
        }
    </div>
  )
}

export default CountriesListShimmer
