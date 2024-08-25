import React, { useEffect, useState } from 'react'
import './counrtyDetail.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import SingleCountryShimmer from './SingleCountryShimmer'

const SingleCountryDetails = () => {
    // const countryName = new URLSearchParams(location.search).get("name") ;
    const params = useParams()
    // console.log(params)
    const countryName = params.country
    const [countryData, setCountryData] = useState({})
    const [notFound , setNotFound] = useState(false)
    const {state} = useLocation()
    console.log(state)
    // console.log(countryName);    
    
    function updateCountryData(data){
      setCountryData({
        name : data.name.common,
        // nativename : data.name.nativeName
        nativename: Object.values(data.name.nativeName).common,
        population : data.population,
        region : data.region,
        capital : data.capital,
        tld : data.tld,
        languages : Object.values(data.languages).join(', '),
        flag : data.flags.svg,
        currencies : Object.values(data.currencies).map((currency)=> {
          return currency.name
        }).join(', '),
        borders :  ["India"]
      })
    }
    useEffect(() => {

      if(state){
        updateCountryData(state)
        return
      }
           fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res) => {
            return res.json();
           }).then(([data]) => {
            // console.log(data);
           updateCountryData(data)
           }).catch((err)=> {
            console.log(err);
            setNotFound(true);
           })
        },[countryName])

        // COUNTRY NOT FOUND.....

        if(notFound){
          return <div>Country not found</div>
        }
        // console.log("this data",countryData);

        var countryDataLength = Object.keys(countryData).length;
        // console.log(countryDataLength)
        if(countryDataLength === 0){
          return <SingleCountryShimmer></SingleCountryShimmer>
        }

  return (
    <>
    {/* <SingleCountryShimmer></SingleCountryShimmer> */}
    <main>
    <div className="country-details-container">
      <span className="back-button" onClick={() => {history.back()}}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name} flag`} />
        <div className="details-text-container">
          <h1>{countryData.name}</h1>
          <div className="details-text">
            <p>
              <b>Native Name : {countryData.nativename}
              </b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>
                Population : {countryData.toLocaleString('en-IN')}
              </b>
              <span className="population"></span>
            </p>
            <p>
              <b/>Region : {countryData.region}<b/>
              <span className="region"></span>
            </p>
            <p>
              <b>Capital : {countryData.capital}
                </b>
              <span className="capital"></span>
            </p>
            <p>
              <b>Top Level Domain : {countryData.tld}
              </b>
              <span className="top-level-domain"></span>
            </p>
            <p>
              <b>Currencies : {countryData.currencies}
              </b>
              <span className="currencies"></span>
            </p>
            <p>
              <b>Languages : {countryData.languages}

              </b>
              <span className="languages"></span>
            </p>
          </div>
          {/* <div className="border-countries">
            <b>Border Countries: </b>&nbsp;
          </div> */}
        </div>
      </div>
    </div>
  </main>
  </>
  )
}

export default SingleCountryDetails
