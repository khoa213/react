import { styled } from 'styled-components';
import greenArrow from '../images/greenarrow.svg';
import redArrow from '../images/redarrow.svg';
const StyledNFTButtons = styled.button`
    width: 115px;
    height: 46px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 12px;
    
`;
const NFTButtons = ({ButtonText,children,percent,...rest}) => {
    return <StyledNFTButtons {...rest}>{ percent && <img src={ percent< 0 ? redArrow : greenArrow} alt="arr"></img> }
    {children}{Math.abs(percent)}%</StyledNFTButtons>
}

export {NFTButtons};