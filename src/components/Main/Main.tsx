import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPeople } from '../../services/peopleService.ts';
import { extractId, Person } from '../../utils.ts';
import { BlackText, ButtonsRow, Input, MainWrapper, PageButton, UserRow } from './Main.styled.ts';

const Main: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [searchItem, setSearchItem] = useState<string>("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPeople(page);
        setPeople(response);
      } catch (error) {
        setError(
          "Failed to fetch data. Please try again later. Error: " + error
        );
      }
    };

    fetchData();
  }, [page]);

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  if (error) {
    return <div>{error}</div>;
  }
  if (!filteredPeople) {
    return <div>* * * Loading * * *</div>;
  }

  return (
    <MainWrapper>
      <Input onChange={(e) => setSearchItem(e.target.value)} />
      {filteredPeople?.map((person) => {
        return (
          <UserRow
            key={person?.name}
            onClick={() => {
              navigate(`/person/${extractId(person.url)}`);
            }}
          >
            <BlackText>{person.name}</BlackText>
          </UserRow>
        );
      })}
      <ButtonsRow>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </PageButton>
        <PageButton disabled={false} onClick={() => setPage(page + 1)}>
          {">"}
        </PageButton>
      </ButtonsRow>
    </MainWrapper>
  );
};

export default Main;
