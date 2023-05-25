import Circle from '../components/images/Ellipse 2.svg';
import Notifi from '../components/images/bell.svg';
import Avatar from '../components/images/avatar.svg';
const Searchbar = () => {
    return <>
      <div style={{
        width:'75%',
        height:'25%',
        backgroundColor: '#36BC4C',
        float: 'left',
        boxSizing: 'border-box',
        paddingRight: '2%'
      }}>
        <div style={{width:'461px',
        height: '56px',
        float:'left'
      }}>
      <input type="text" placeholder="Search item,collection and account" style={{width: '100%',
        height: '90%',
        borderRadius: '35px'
      }}/>
      </div>
      <div style={{
        float: 'right',
        display: 'flex'
      }}>
        <div style={{
          position: 'relative',
          marginRight: '5%'
        }}>
      <img src={Circle} alt="" />
      <div style={{position:'absolute',
        left: '33%',
         bottom:'20%'
      }}>
      <img src={Notifi} alt="" />
      </div>
      </div>
      <div >
      <img src={Avatar} alt="" />
      </div>
      </div>
      </div>
    </>
}
export {Searchbar};