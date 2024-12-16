import { Link } from "react-router-dom";
import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";


export const HomePage = ({countries}) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries]

    if (region) {
       data = data.filter(country => country.region.includes(region))
    }

        if (search) {
            data = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data)
    }
  
  useEffect(() => {
    handleSearch()
  },[countries])


  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {filteredCountries?.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.common,
            info: [
              {
                title: 'Population',
                description: country.population.toString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital.toString(),
              },
            ]
          };
         
        return <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'inherit'}} key={country.name.common}>
            <Card {...countryInfo}/></Link>

        })}
      </List>
    </>
  )
}


