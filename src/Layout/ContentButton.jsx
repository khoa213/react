import  styled  from "styled-components";
const StyledButton = styled.button`
  width: ${props => props.Width};  
  height: ${props => props.Height};
  background-color:${props => props.BackGround};
  border-radius: ${props => props.Radius};
  color: ${props => props.TextColor};
  font-weight: ${props => props.FontWeight};
  font-size : ${props => props.FontSize};
  margin: ${props => props.Margin};
`;
const ContentButton = ({Width,Height,BackGround,Radius,Text,TextColor,FontWeight,FontSize,Margin}) => {
    return <>  
        <StyledButton 
        Width={Width}
        Height={Height}
        BackGround={BackGround}
        Radius={Radius}
        TextColor={TextColor}
        FontWeight={FontWeight}
        FontSize={FontSize}
        Margin={Margin}>{Text}</StyledButton>
        
    </>
}
export {ContentButton};