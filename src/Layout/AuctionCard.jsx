import styled from "styled-components";
const StyledAuctionCard = styled.div`
    width:50%;
    margin-top: 5%;
    background-color: white;
    display: ${props => props.display};;
`;
const AuctionCard = ({Image,Text,Likes,display}) => {
    return <>
        <StyledAuctionCard display={display}>
        <img src={Image} alt="" style={{marginLeft:'5%',width:'80%'}}/>
        <div style={{marginLeft:'5%'}}>{Text}</div>
        <div>{Likes}</div>
        </StyledAuctionCard>
    </>
}
export {AuctionCard};