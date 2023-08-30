import { useRoutes,BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import Navbar from '../../components/Navbar'
import './App.css'

const AppRoutes =()=>{
  let routes=useRoutes([
    {path:'/',element:<Home/>},
    {path:'/my-orders',element:<MyOrders/>},
    {path:'/my-Account',element:<MyAccount/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/sing-in',element:<SingIn/>},
    {path:'/*',element:<NotFound/>},
   
  ])
  return routes
}
const App=()=> {
  return (
    <div>
     <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
     </BrowserRouter>
    </div>
  )
}

export default App
