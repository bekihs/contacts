import styled from 'styled-components';



export const GroupButton = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #777777;
  padding:10px 17px;
  margin-right:20px;
  cursor: pointer;
`;

export const SelectedGroupButton = styled(GroupButton)`
  background: #F15454;
  box-shadow: 0px 2px 3px rgba(34, 34, 34, 0.6);
  border-radius: 19px;
`

export const GroupsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start; 
  margin-top:28px;
`;

export const BooksContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start; 
  border-bottom: 2px solid #535353;
  padding-bottom:15px;
`;

export const GroupTitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #AAAAAA;
  justify-content: flex-start; 
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  padding:32px  0 0 15px;
`;
export const BookCard = styled.div`
  max-width: 250px;
  min-width: 200px;
  width: 23vw;
  text-align: left; 
  padding: 3vh  15px;

  & img {
    border-radius: 4px;
    width:200px;
  }

  & .name{
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #CCCCCC;
  }

  & .ownedByTitle{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }

  & .ownedByNmae{
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #CCCCCC;
  }
}
`;  