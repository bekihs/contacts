import styled from 'styled-components';
import searchIcon from '../assets/img/Search Icon.png'


export const Container = styled.div`
  padding:28px
`;

export const HeaderContainer = styled.div`
  height:33px;
  display: flex;  
  padding: 20px;
  background: #535353;
  & img{

  }
`;
export const SearchInput = styled.input` 
  width:100%;
  padding:15px;
  box-sizing: border-box;
  margin:0;
  border-radius: 8px;
  background-color:transparent;
  border: 3px solid #777777;
  
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px 10px; 
  text-indent: 38px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color:#fff;
  
  &::placeholder { 
    color: #5A5A5A;
  }
`;
 