import React from "react";
import PersonCard from "./PersonCard";
import { ButtonGroup, Button } from 'reactstrap';
import styled from 'styled-components';
import './StarWars.css';

const MyCardBody = styled.div`
    min-height: 1px;
    padding: 1.5rem;
    width: 300px;    
    color: #181616;
    font-weight: bold;
`;

const PeopleList = props => {
    const { nextPage, previousPage, people } = props;    
    const handleNextPage = () => {
        nextPage()
    }
    const handlePreviousPage = () => {
        previousPage()
    }    
    return (
        <>
            <ButtonGroup>
                <Button onClick={handlePreviousPage}>back</Button>
                <Button onClick={handleNextPage}>next</Button>
            </ButtonGroup>
        <div className="cardContainer">
        <MyCardBody>        
            {people.map((personObj, index) => {                
                return <PersonCard
                species={personObj.species}
                key={index}
                name={personObj.name}
                eye_color={personObj.eye_color}
                hair_color={personObj.hair_color}
                skin_color={personObj.skin_color}
                birth_year={personObj.birth_year}
                films={personObj.films.length}
                gender={personObj.gender}
                starships={personObj.starships.length}
                vehicles={personObj.vehicles.length}
                />
            })}                  
        </MyCardBody>
        </div>
        </>
    )
}

export default PeopleList;