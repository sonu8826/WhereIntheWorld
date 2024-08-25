import React, { useEffect } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
// import countriesData from '../countriesData'

export default function CountriesContainer({query}) {
  const [countriesData , setcountriesData] = React.useState([])
  const [cnt, setCnt] = React.useState(0)
  useEffect(()=>{
    //  console.log("Hello from use Effect")
    fetch("https://restcountries.com/v3.1/all").then((response) =>{
      return response.json()
     }).then((data) => {
        setcountriesData(data)
        console.log(data)
     })
  },[])
  // var filteredData = countriesData.filter((country)=> country.name.common.toLowerCase().includes('india'))
  // console.log(filteredData)
  if(countriesData.length === 0){
    return <CountriesListShimmer></CountriesListShimmer>
  }
  return (
    <>
      {/* <CountriesListShimmer></CountriesListShimmer> */}
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
    </>
  )
}
