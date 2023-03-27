import styled from 'styled-components';

export const StatisticsBox = styled.div`
  margin: 0 auto;
  padding: 30px;
  width: 500px;
`;
export const StatisticsSection = styled.section``;
export const StatisticsTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  margin-bottom: 30px;
`;
export const StatisticsButtonList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`;
export const StatisticsButtonItem = styled.li``;
export const StatisticsButton = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #010101;
  border-radius: 5px;
`;
export const StatisticsPreTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  margin-bottom: 30px;
`;
export const StatisticsTextList = styled.ul``;
export const StatisticsText = styled.li`
  margin: 0;
  font-size: 14px;
  & + & {
    margin-top: 20px;
  }
`;
export const StatisticsTextNotification = styled.p`
  margin: 0;
  font-size: 14px;
  & + & {
    margin-top: 20px;
  }
`;
