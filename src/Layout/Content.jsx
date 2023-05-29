import { ContentButton } from "./ContentButton";
import { AuctionCard } from "./AuctionCard";
import ApeLove from "../components/images/ape in love.svg";
import Avatar from "../components/images/avatar.svg";
import { ETHCard } from "../components/Cards";
import { Creator } from "./Creator";

const fakeDataCreator = [
    {
        id:1,
        name:"Michael Jordan",
        account:"@jordan_"
    },
    {
        id:2,
        name:"John Tibao",
        account:"@johnti60"
    },
    {
        id:3,
        name:"Teressa",
        account:"@teressa"
    }
]
const Content = () => {
    return <>
        <div style={{
            width:'75%',
            height: '75%',
            backgroundColor: '#CAEAE6',
            float: 'right'
        }}>
        <div style={{width:'60%',
            marginLeft:'2%',
            float:'left'
        }}>
        <div style={{
        backgroundColor: 'violet' 
        }}>
        <div style={{fontSize:'54px',
            margin: '20px',
            color:'white'
        }}>
            Discover,create and sell your own NFT
        </div>
        <ContentButton width='128px' height='46px' Text="Discover" background="#FFFFFF" radius="40px" 
        textcolor="#5429FF" FontWeight={700} fontsize='16px' margin='10px'></ContentButton>
        <ContentButton width='128px' height='46px' Text="Create" background="transparent" radius="40px" 
        textcolor="white" FontWeight={700} fontsize='16px' ></ContentButton>
        </div>
        <div>
            <div style={{fontSize:'24px',
            fontWeight:'700',
            marginTop:'1%',
            marginBottom:'1%',
            float: 'left'
            }}>Trending Auction</div>
            <div style={{float:'right',
            marginTop:'1%'
            }}>
            <ContentButton width='45px' height='28px' Text="Art" background="rgba(84, 41, 255, 0.1)" radius="40px" 
        textcolor="#5429FF" FontWeight={500} fontsize='14px' margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton width='45px' height='28px' Text="Art" background="transparent" radius="40px" 
        textcolor="#7A797D" FontWeight={500} fontsize='14px' margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton width='45px' height='28px' Text="Art" background="transparent" radius="40px" 
        textcolor="#7A797D" FontWeight={500} fontsize='14px' margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton width='45px' height='28px' Text="Art" background="transparent" radius="40px" 
        textcolor="#7A797D" FontWeight={500} fontsize='14px' margin="0px 0px 0px 10px"></ContentButton>
            </div>
        </div>
            <div style={{display:'flex',
                flexWrap:'wrap',
                justifyContent: 'space-around',
                marginTop:'10%'
            }}>
                <AuctionCard Image={ApeLove} Text="Ape in love" Likes="21.5K Likes" Avatar={Avatar} Account="@johnti60"></AuctionCard>
                <AuctionCard Image={ApeLove} Text="Ape in love" Likes="21.5K Likes" Avatar={Avatar} Account="@johnti60"></AuctionCard>
                <AuctionCard Image={ApeLove} Text="Ape in love" Likes="21.5K Likes" Avatar={Avatar} Account="@johnti60"></AuctionCard>
                <AuctionCard Image={ApeLove} Text="Ape in love" Likes="21.5K Likes" Avatar={Avatar} Account="@johnti60"></AuctionCard>
            </div>
        </div>
        <div style={{
            width:'35%',
            float:'right',
        }}>
        <div style={{
        display:'flex',
        flexWrap: 'wrap',
        marginTop:'5%'
            }}><ETHCard title="Revenue" value="5.00" percent={12.3}></ETHCard>
            <ETHCard title="Revenue" value="5.00" percent={12.3}></ETHCard>
            <ETHCard title="Revenue" value="5.00" percent={12.3}></ETHCard>
            <ETHCard title="Revenue" value="5.00" percent={12.3}></ETHCard>
        </div>
        <div style={{backgroundColor:'white',width:'82%',borderRadius:'16px'}}>
            <div>
            <span style={{fontWeight:400,fontSize:'24px',margin:'2% 50% 2% 2%'}}>Top Creator</span>
            <span style={{fontWeight:500,fontSize:'16px',color:'#747475'}}>See All</span>
            </div>
            <div>
                {
                    fakeDataCreator.map((item)=><Creator id={item.id} name={item.name} account={item.account}></Creator>)
                }
            </div>
        </div>
        </div>
        </div>
    </>
}
export {Content};