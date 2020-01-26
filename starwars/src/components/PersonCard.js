import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import './StarWars.css';

const PersonCard = props => {    
    const { name, birth_year, films, eye_color, hair_color, skin_color, gender, starships, vehicles, species } = props;
        return (
        <>
        <br/>
            <Card>
            <div className="peopleName"><CardHeader>{name}</CardHeader></div>
            <CardBody>
                <CardText>Gender: {gender}</CardText>
               {/* 
               removed species as it is a new obj to get
               <CardText>Species: {species}</CardText>*/}
                <CardText>Eye color: {eye_color}</CardText>
                <CardText>Hair color: {hair_color}</CardText>
                <CardText>Skin color: {skin_color}</CardText>
                <CardText>Birth year: {birth_year}</CardText>
                <CardText>Starships: {starships}</CardText>
                <CardText>Vehicles: {vehicles}</CardText>
                <CardText>Films: {films}</CardText>
            </CardBody>
            </Card>
        <br/>
        </>
    )
}

export default PersonCard;