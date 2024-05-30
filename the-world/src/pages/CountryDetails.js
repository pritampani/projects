import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCountryDetails from '../services';
import './CountryDetails.css';


export default function CountryDetails(props) {
    const {countryCode} = useParams();
    const [details,setdetails] = useState({});
    useEffect(()=>{
        getCountryDetails(countryCode).then(result=>{
            setdetails(result.data)
        })
    })
  return (
    <div className='country-detail-wrapper'>
        <div>
            <img src ={details.flags?.png} alt ={details.name}/>
        </div>
        <div>Name :{details.name}</div>
        <div>population :{details.population}</div>
        <div>capital :{details.capital}</div>
        <div>currencies :{details.currencies?.map(currency =>currency.name).join(',')}</div>

    </div>
  )
}
