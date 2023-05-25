import Dashboard from '../components/images/Dashboard.svg';
import Market from '../components/images/Market.svg';
import ActiveBid from '../components/images/Active bid.svg';
import Portfolio from '../components/images/Portfolio.svg';
import Wallet from '../components/images/Wallet.svg';
import Favorite from '../components/images/Heart.svg';
import History from '../components/images/Clock.svg';
import Settings from '../components/images/Settings.svg';
import Logo from '../components/images/Logo.svg';
import SidebarShow from '../components/images/SidebarShow.svg';
import { Menu } from '../pages/Home';
const Sidebar = () => {
    return <>
        
        <div style={{
            width: '25%',
            height: '100%',
            float: 'left',
            boxSizing: 'border-box'
        }}>
        <img src={Logo} alt="" style={{
            marginTop: '20px',
            marginLeft: '20px'
        }}/>
        <Menu imageSource={Dashboard} menuOption="Dashboard"></Menu>
        <Menu imageSource={Market} menuOption="Market"></Menu>
        <Menu imageSource={ActiveBid} menuOption="Active Bids"></Menu>
        <p style={{fontWeight:700,
        fontSize:'12px',
        marginLeft: '5%'
        }}>Profile</p>
        <Menu imageSource={Portfolio} menuOption="My portfolio"></Menu>
        <Menu imageSource={Wallet} menuOption="Wallet"></Menu>
        <Menu imageSource={Favorite} menuOption="Favorites"></Menu>
        <Menu imageSource={Settings} menuOption="Settings"></Menu>
        <img src={SidebarShow} alt="" style={{marginLeft:'5%',
        marginTop: '5%'
        }}/>
        </div>
    </>
}
export {Sidebar};