import styled from "styled-components";

import {IoSearch} from "react-icons/io5";

const InputContainer = styled.label`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: var(--color-elements);

  @media(min-width: 767px){
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...'
}
)`
  background-color: var(--color-elements);
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
`;


export const Search = ({search, setSearch}) => {
  return (
    <InputContainer>
        <IoSearch/>
        <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}

export default Search
