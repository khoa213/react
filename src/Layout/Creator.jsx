import { ContentButton } from "./ContentButton";
const Creator = ({id,name,account}) => {
    return <>
        <div style={{margin:'5%'}}>
            <span style={{fontWeight:700,fontSize:'16px'}}>{id}.</span><span>
            <span style={{fontWeight:700,fontSize:'16px'}}>{name}</span><br />
            <span style={{fontWeight:400,fontSize:'12px',color:'#747475'}}>{account}</span></span>
            <span><ContentButton Width='77px' Height='32px' BackGround='rgba(84, 41, 255, 0.1);' Radius='20px' 
            TextColor='#5429FF' FontWeight={500} FontSize="12px" Text="Follow" Margin="0% 0% 10% 40%"></ContentButton></span>
        </div>
    </>
}
export {Creator};