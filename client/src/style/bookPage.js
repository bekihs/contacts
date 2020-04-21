import styled from 'styled-components';


export const BookDetails = styled.div`
  grid-area:details;
   
  amily: Roboto;
  font-style: normal;
  text-align:start;
  padding-left:25px;
  padding-right:25px;

  & .details{
    padding-top:15px
  }
  & .title{ 
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    color: #AAAAAA;
  }
  
  & .lable{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
    padding-right:10px
  }

  & .data{
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #CCCCCC;
  }
`;


export const BookDisplay = styled.div`
  margin-top:28px;
  border-bottom: 2px solid #535353;
  padding-bottom:70px;

  display:grid;
  grid-template-columns:1fr 3fr;
  grid-template-areas:  "img details details";

  & .bookImage{
    grid-area:img;
    align-self: stretch;
    width:100%;
  }
`;


export const HomeButton = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-decoration: none;
  color: #777777;
  text-align:start;

`;



export const StarsContainer = styled.span`
  padding-left:29px;
  
  & img{
    padding-left:10px;
    width:25px;
  }
`