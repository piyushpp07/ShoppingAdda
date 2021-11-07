import React, { useState, useEffect } from "react";
import Header from './components/Header/Header';
import theme from './components/Header/Theme';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { auth } from './firebase';

//Components Imported
import ForgotPassword from "./components/User/Forget";
import Login from './components/User/Login';
import Signup from './components/User/SignUp';
import Footer from './components/Footer/Footer';
import Myaccount from './components/User/MyAccount';
import Womens from './components/Womens/Women';
import Home from './components/Home/Home';
import Mens from './components/Mens/Mens';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import Checkout from './components/Cart/Checkout'
import Search from './components/Header/Search';
import Myorder from "./components/Order/Myorder";
import Top from './components/Mens/Top'
import Bottom from './components/Mens/Bottom'
import Topwomens from "./components/Womens/TopWomens";
import Bottomwomens from "./components/Womens/Bottom";
import { StateProvider } from './context/StateProvider'
import Chat from './components/ChatBot/chatbot'
function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [user, setUser] = useState('');
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) { setUser(user); console.log(user.uid) }
      else setUser(null)
    }
    )
  }, [])
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Header user={user}
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/Myaccount">
              <Myaccount user={user} />
            </Route>
            <Route path="/Mens">
              <Mens />
            </Route>
            <Route path="/Womens">
              <Womens />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/forget">
              <ForgotPassword />
            </Route>
            <Route path="/Search">
              <Search />
            </Route>
            <Route path="/Myorder">
              <Myorder />
            </Route>
            <Route path="/Top">
              <Top />
            </Route>
            <Route path="/Bottom">
              <Bottom />
            </Route>
            <Route path="/Topwomens">
              <Topwomens />
            </Route>
            <Route path="/BottomWomensWear">
              <Bottomwomens />
            </Route>
            <Route exact path='/cart'
              render={(props) => (
                <Cart
                  {...props}
                  user={user}
                />
              )} />
            <Route exact path='/Wishlist'
              render={(props) => (
                <Wishlist
                  {...props}
                  user={user}
                />
              )} />

          </Switch>
          <Chat />


          <Footer />

        </BrowserRouter>

      </ThemeProvider>



    </StateProvider >

  );
}

export default App;
