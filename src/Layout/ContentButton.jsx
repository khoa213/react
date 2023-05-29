import  styled  from "styled-components";
const StyledButton = styled.button`
  width: ${props => props.width};  
  height: ${props => props.height};
  background-color:${props => props.background};
  border-radius: ${props => props.radius};
  color: ${props => props.textcolor};
  font-weight: ${props => props.Fontweight};
  font-size : ${props => props.fontsize};
  margin: ${props => props.margin};
`;
const ContentButton = ({width,height,background,radius,Text,textcolor,Fontweight,fontsize,margin}) => {
    return <>  
        <StyledButton 
        width={width}
        height={height}
        background={background}
        radius={radius}
        textcolor={textcolor}
        Fontweight={Fontweight}
        fontsize={fontsize}
        margin={margin}>{Text}</StyledButton>
        
    </>
}
export {ContentButton};