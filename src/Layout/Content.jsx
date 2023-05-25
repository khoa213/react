import { ContentButton } from "./ContentButton";
import { AuctionCard } from "./AuctionCard";
import ApeLove from "../components/images/ape in love.svg";
import Avatar from "../components/images/avatar.svg";
import { ETHCard } from "../components/Cards";
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
]
const Content = () => {
    return <>
        <div style={{
            width:'75%',
            height: '75%',
            backgroundColor: '#36BC4C',
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
        <ContentButton Width='128px' Height='46px' Text="Discover" BackGround="#FFFFFF" Radius="40px" 
        TextColor="#5429FF" FontWeight={700} FontSize='16px' Margin='10px'></ContentButton>
        <ContentButton Width='128px' Height='46px' Text="Create" BackGround="transparent" Radius="40px" 
        TextColor="white" FontWeight={700} FontSize='16px' ></ContentButton>
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
            <ContentButton Width='45px' Height='28px' Text="Art" BackGround="rgba(84, 41, 255, 0.1)" Radius="40px" 
        TextColor="#5429FF" FontWeight={500} FontSize='14px' Margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton Width='45px' Height='28px' Text="Art" BackGround="transparent" Radius="40px" 
        TextColor="#7A797D" FontWeight={500} FontSize='14px' Margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton Width='45px' Height='28px' Text="Art" BackGround="transparent" Radius="40px" 
        TextColor="#7A797D" FontWeight={500} FontSize='14px' Margin="0px 0px 0px 10px"></ContentButton>
        <ContentButton Width='45px' Height='28px' Text="Art" BackGround="transparent" Radius="40px" 
        TextColor="#7A797D" FontWeight={500} FontSize='14px' Margin="0px 0px 0px 10px"></ContentButton>
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
            <span style={{fontWeight:400,fontSize:'24px',margin:'2% 50% 2% 2%'}}>Top Creator</span>
            <span style={{fontWeight:500,fontSize:'16px',color:'#747475'}}>See All</span>
        </div>
        </div>
        </div>
    </>
}
export {Content};