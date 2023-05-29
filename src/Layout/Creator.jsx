import { ContentButton } from "./ContentButton";
const Creator = ({id,name,account}) => {
    return <>
        <div style={{margin:'5%'}}>
            <span style={{fontWeight:700,fontSize:'16px'}}>{id}.</span><span>
            <span style={{fontWeight:700,fontSize:'16px'}}>{name}</span><br />
            <span style={{fontWeight:400,fontSize:'12px',color:'#747475'}}>{account}</span></span>
            <span><ContentButton width='77px' height='32px' background='rgba(84, 41, 255, 0.1);' radius='20px' 
            textcolor='#5429FF' FontWeight={500} fontsize="12px" Text="Follow" margin="0% 0% 10% 40%"></ContentButton></span>
        </div>
    </>
}
export {Creator};