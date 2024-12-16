import { useNavigate, useParams } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchByName } from "../../config";
import styled from "styled-components";
import { Info } from "./Info";

const Button = styled.button`
  padding: 0 2rem;
  background-color: var(--color-elements);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);
  color: var(--color-text);
  cursor: pointer;

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

`

export const Details = () => {
    
    const {name} = useParams();
    const goBack = useNavigate();

    const [country, setCountry] = useState();

    useEffect(() => {
        axios.get(searchByName(name)).then(
            ({data}) => setCountry(data[0])
        )
    },[name])

  return (
    <>
        <Button onClick={()=>  goBack(-1)}>
           <IoArrowBack/> Back
        </Button>
        {country && ( <Info props={country}/>
        )}
    </>
  )
}


