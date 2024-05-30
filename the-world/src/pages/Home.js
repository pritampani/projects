import Country_card from '../Components/country_card'
import './Home.css';
import { useEffect, useState } from "react";
import { getAllcountries } from "../services";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
 

function Home() {
  const [allCountriesList,setallCountriesList] = useState([]);
  const [region, setRegion] = useState('');
  const [countryName,setCountryName] = useState("");
  const [filteredCountriesList,setfilteredCountriesList] = useState([]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountryName(event.target.value);
  };
  useEffect(()=>{
    getAllcountries().then(result=>{
      const countries =  result.data;
      setallCountriesList(countries);
      setfilteredCountriesList(countries);
    })
  },[]);
  useEffect(()=>{
    if(region==='' && countryName==='') {
      setfilteredCountriesList(allCountriesList);
    }else {
      let filteredCountries = allCountriesList;
      if(region.length){
      filteredCountries = filteredCountries.filter(country=>{
      if(country.region===region) return true;
      return false;
    });
  }
  if(countryName.length){
  filteredCountries = filteredCountries.filter(country=>{
    const LowercaseName = country.name.toLowerCase();
    if(LowercaseName.includes(countryName.toLowerCase())) return true;
    return false;
  });
}
    setfilteredCountriesList(filteredCountries);
  }
  },[region,allCountriesList,countryName])

  return (
    <>
      <div className="App">
        <div className='filters-wrapper'>
        <TextField 
        id="outlined-basic" 
        label="Filter by Name" 
        variant="outlined"
        onChange={handleCountryChange}

        value = {countryName}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={region}
          label="Filter by Region"
          onChange={handleRegionChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Africa'}>Africa</MenuItem>
          <MenuItem value={'Asia'}>Asia</MenuItem>
          <MenuItem value={'Europe'}>Europe</MenuItem>
          <MenuItem value={'Oceania'}>Oceania</MenuItem>
        </Select>
 
      </FormControl>

        </div>
        <div className="country-card-wrapper">
          {
            filteredCountriesList.map(country=>(
        <Link to = {`/countries/${country.alpha3Code}`}key = {country.alpha3Code}
        style = {{textDecoration:'none'}}
        >
              <Country_card
              name = {country.name}
              capital = {country.capital}
              population = {country.population}
              flagurl = {country.flag}
    
              />
              </Link>

            ))
          }

        </div>
      </div>
    </>
  );
}

export default Home;
