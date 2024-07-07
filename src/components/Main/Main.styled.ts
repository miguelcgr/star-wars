import styled from 'styled-components';

import { COLORS } from '../../colors.ts';

interface IStyledProps {
  disabled?: boolean;
}
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.black};
  padding: 20px;
  margin: 10px;
`;
export const MainWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: ${COLORS.lightBlue};
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const UserRow = styled.div`
  border-radius: 10px;
  height: 60px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  width: 50%;
  margin: 5px auto;
  background-color: ${COLORS.blue};
  align-items: center;
  border: 1px solid ${COLORS.black};
`;
export const ButtonsRow = styled.div`
  height: 60px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 5px;
  align-items: center;
  justify-content: space-evenly;
`;
export const BlackText = styled.text`
  margin: 10px;
  color: ${COLORS.black};
  font-size: 20px;
`;
export const Button = styled.button`
  border: 1px solid ${COLORS.black};
  color: ${COLORS.black};
  background-color: ${COLORS.azure};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0;
  @media (max-width: 480px) {
    padding: 6px 12px;
  }
  &:hover {
    background-color: ${COLORS.blue};
  }
`;

export const PageButton = styled(Button)<{ disabled: boolean }>`
  background-color: "${COLORS.blue}";
  align-items: center;
  &:hover {
    background-color: ${COLORS.darkBlue};
  }
`;
export const Input = styled.input`
  width: 50%;
  margin: 10px auto;
  font-size: 20px;
`;
