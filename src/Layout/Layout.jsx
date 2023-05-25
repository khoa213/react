import { Link,Outlet } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import { Sidebar } from './Sidebar';
import { Content } from './Content';
const Layout = () => {
    return <>
    <Sidebar></Sidebar>
      <Searchbar></Searchbar>
      <Content></Content>
      
    </>
  }
  export {Layout};