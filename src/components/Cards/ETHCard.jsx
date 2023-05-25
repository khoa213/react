import { styled } from 'styled-components';
import { NFTButtons } from '../Buttons';
import ethIcon from '../images/Etheriumicon.svg';
const StyledETHCard = styled.div`
    
    border-radius: 12px;
    background-color: white;
    width: 164px;
    height: 167px;
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