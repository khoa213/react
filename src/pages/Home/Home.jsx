import { styled } from 'styled-components';
import { ETHCard } from '../../components/Cards';

const Home = () => {
    return <>
        {/* <div>
          <Menu imageSource={Dashboard} menuOption="Dashboard"></Menu>
          <Menu imageSource={Market} menuOption="Market"></Menu>
        </div> */}
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
        <ETHCard title={"Revenue"} percent={12.3} value="5.00"></ETHCard>
        <ETHCard title={"Spending"} percent={8.1} value="2.00"></ETHCard>
        <ETHCard title={"Estimated"} percent={3.2} value="7.00"></ETHCard>
        <ETHCard title={"Estimated"} percent={3.2} value="7.00"></ETHCard>
        </div>
        
    </>
}
export {Home};