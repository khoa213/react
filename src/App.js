
import './App.css';
import { RedButton, BlueButton, NFTButtons } from './components/Buttons';
import { Hello } from './Hello';
import { Counter, Counter2 } from './Counter';
import { styled } from 'styled-components';
 
import { Home } from './pages/Home';
import { BrowserRouter, Routes,Route, Link, Outlet } from 'react-router-dom';
import { AboutUs } from './pages/About us';
import { Layout } from './Layout/Layout';

// const Title = styled.h1`
//   color: red;
// `;
// const Container = styled.div`
//   background-color: white;
// `;
// const Wrapper = styled(Container)`
//   background-color: pink;
// `;
// const CounterStyle = styled(Counter2)`
//   button{
//     width: 50px;
//     height: 50px;
//   }
// `;


function Button() {
  return <button>my button</button>
}


function App() {
  return (
    <>
    <Layout>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </Layout>
    </>
  );
}



export default App;
