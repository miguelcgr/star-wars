import styled from 'styled-components';

import { COLORS } from '../../colors.ts';

export const MainWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 20px;
  background-color: ${COLORS.yellow};
  align-items: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const FormRow = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonRow = styled(FormRow)`
  width: 60%;
  margin: 0;
  border: none;
`;
export const Button = styled.button`
  border: 1px solid ${COLORS.black};
  color: ${COLORS.black};
  border-radius: 10px;
  background-color: ${COLORS.green};
  padding: 15px 30px;
  width: 100px;
  margin: 10px auto;
  font-size: 20px;
  box-shadow: 0 2px 3px 0;
  &:hover,
  &:focus {
    background-color: ${COLORS.pink};
  }
`;
export const Card = styled.div`
  background-color: ${COLORS.peach};
  border-radius: 8px;
  box-shadow: 0 2px 3px 0;
  padding: 16px;
  margin: 16px 0;
  max-width: 400px;
  width: 100%;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  font-size: 1.5em;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardLabel = styled.span`
  font-weight: bold;
`;

export const CardValue = styled.span`
  color: ${COLORS.black};
`;
