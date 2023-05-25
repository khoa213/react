import { styled } from 'styled-components';
import { NFTButtons } from '../Buttons';
import ethIcon from '../images/Etheriumicon.svg';
const StyledETHCard = styled.div`
    
    box-sizing: border-box;
    padding-top: 1%;
    text-align: center;
    border-radius: 12px;
    background-color: white;
    width: 40%;
    height: 40%;
    margin-bottom: 2%;
    margin-right: 2%;
     .title {
        color: #747475;
    }
    .value {
        color: black;
    } 
`;
const ETHCard = ({title,value,percent}) => {
    return <StyledETHCard>
        <div className='title' >{title}</div>
        <div className='value'><img src={ethIcon} alt="" /><span>{value}</span><span>ETH</span></div>
        <NFTButtons percent={percent}></NFTButtons>
    </StyledETHCard>
}
export {ETHCard};