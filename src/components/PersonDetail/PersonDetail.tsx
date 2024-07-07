import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getPersonById, getPlanetById } from '../../services/peopleService.ts';
import { extractId, Person } from '../../utils.ts';
import { Button, ButtonRow, Card, CardLabel, CardRow, CardTitle, CardValue, MainWrapper } from './PersonDetail.styled.ts';

const PersonDetail = () => {
  const navigate = useNavigate();

  const [person, setPerson] = useState<Person>();
  const [planetName, setPlanetName] = useState<string>();
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getPersonById(id!)
      .then((response) => {
        setPerson(response);
      })
      .catch((err) => setError(err));
  }, [id]);

  useEffect(() => {
    if (person?.homeworld) {
      getPlanetById(extractId(person.homeworld))
        .then((response) => {
          setPlanetName(response.name);
        })
        .catch((err) => setError(err));
    }
  }, [id, person?.homeworld]);

  if (error) {
    return <div>{error}</div>;
  }
  if (!person) {
    return <div>* * * Loading * * *</div>;
  }

  return (
    <MainWrapper>
      <Card>
        <CardTitle>{person.name}</CardTitle>
        <CardRow>
          <CardLabel>Birth Year:</CardLabel>
          <CardValue>{person.birth_year}</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Height:</CardLabel>
          <CardValue>{person.height} cm</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Hair Color:</CardLabel>
          <CardValue>{person.hair_color}</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Mass:</CardLabel>
          <CardValue>{person.mass} kg</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Skin Color:</CardLabel>
          <CardValue>{person.skin_color}</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Eye Color:</CardLabel>
          <CardValue>{person.eye_color}</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Gender:</CardLabel>
          <CardValue>{person.gender}</CardValue>
        </CardRow>
        <CardRow>
          <CardLabel>Planet:</CardLabel>
          <CardValue>{planetName}</CardValue>
        </CardRow>
      </Card>
      <ButtonRow>
        <Button onClick={() => navigate(`/`)}>Back</Button>
      </ButtonRow>
    </MainWrapper>
  );
};

export default PersonDetail;
