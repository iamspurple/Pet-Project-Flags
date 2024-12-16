import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "../../config";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem
    }
   
    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;

`;

const FlagImg = styled.img`
    display: block;
    width: 85%;
    heigth: 85%;
    object-fit: contain;
`;

const InfoTitle = styled.h2`
    margin: 0;
    font-weight: var(--fw-regular);

`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0 3rem 0;

    @media(min-width: 1024px){
        flex-direction: row;
        gap: 3rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

`;

const ListItem = styled.li`
    line-height: 1.8;
`;

const Meta = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;


    @media(min-width: 767px){
        flex-direction: row;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
   

`;

const Tag = styled.span`
    border-radius: var(--radius);
    padding: 0.5rem 1rem;
    background-color: var(--color-elements);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;




export const Info = ({props}) => {

   const {
            name,
            nativeName,
            flags,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies = [],
            languages = [],
            borders = [],
        
    } = props;
       
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios.get(filterByCode(borders)).then(({data}) => setBorderCountries(data.map((country) => country.name.common)))}
    , [borders])

    
    
  return (
   <Wrapper>
    <FlagImg src={flags.png} alt={name.common}/>
    <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
            <List>
                <ListItem>
                    <b>Native Name: </b>{nativeName}
                </ListItem>
                <ListItem>
                    <b>Population: </b>{population.toString()}
                </ListItem>
                <ListItem>
                    <b>Region: </b>{region}
                </ListItem>
                <ListItem>
                    <b>Sub region: </b>{subregion}
                </ListItem>
                <ListItem>
                    <b>Capital: </b>{capital}
                </ListItem>
            </List>
            <List>
            <ListItem>
                    <b>Top Level Domain: </b>{tld.map(d => (<span key={d}>{d}</span>))}
                </ListItem>
                <ListItem>
                    <b>Currencies: </b>{Object.values(currencies).map((c) => (<span key={c.symbol}>{c.name}</span>))}
                </ListItem>
                <ListItem>
                    <b>Languages: </b>{Object.values(languages) + ''}
                </ListItem>
            </List>
        </ListGroup>
        <Meta>
            <b>Border Countries: </b>
            { !borders.length ? (
                <span>There is no border countries</span>
            ) : (
            <TagGroup>
                {borderCountries.map((b) => 
                    (<Link to={`/country/${b}`}style={{ textDecoration: 'none', color: 'inherit'}} key={b}>
                        <Tag >{b}</Tag>
                        </Link>))}
            </TagGroup>)}
        </Meta>
    </div>
   </Wrapper>
  )}


