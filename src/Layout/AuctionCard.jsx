import styled from "styled-components";
const StyledAuctionCard = styled.div`
    width:45%;
    margin-top: 5%;
    margin-left: 1%;
    background-color: white;
    display: ${props => props.display};
    border-radius: 16px;
`;
const AuctionCard = ({Image,Text,Likes,display,Avatar,Account}) => {
    return <>
        <StyledAuctionCard display={display}>
        <img src={Image} alt="" style={{marginLeft:'5%',marginTop:'2%',width:'80%'}}/><br/>
        <span style={{marginLeft:'5%',color:'#27262E',
        fontWeight:700,
        fontSize:'24px',
        marginRight: '20%'
        }}>{Text}</span>
        <span style={{fontWeight:400,fontSize:'16px'}}>{Likes}</span>
        <div>
            <span style={{marginLeft:'5%',marginRight:'5%'}}><img src={Avatar} alt="" style={{width:'28px',height:'28px'}}/></span>
            <span style={{color:'#747475',fontWeight:400,fontSize:'16px'}}>{Account}</span>
        </div>
        
        </StyledAuctionCard>
    </>
}
export {AuctionCard};