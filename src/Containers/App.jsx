import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../Components/Layouts/Header/Header.jsx';
import OurHistoryPage from "../Pages/OurHistory/OurHistoryPage.jsx";
import HomePage from "../Pages/Home/HomePage.jsx";
import ProductsPage from "../Pages/Products/ProductsPage.jsx";
import UsefulArticlesPage from "../Pages/UsefulArticles/UsefulArticlesPage.jsx";
import ContactsPage from "../Pages/Contacts/ContactsPage.jsx";
import ShoppingCartPage from "../Pages/ShoppingCart/ShoppingCartPage.jsx";
import ProfilePage from "../Pages/Profile/ProfilePage.jsx";

function App() {
   return (
    <Suspense fallback={<div>Loading...</div>}>
      
    <Router>
    <Header /> 
  <Switch>
  <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/Products">
          <ProductsPage />
        </Route>
        <Route path="/Useful-articles">
          <UsefulArticlesPage />
        </Route>
        <Route path="/Contacts">
          <ContactsPage />
        </Route>
        <Route path="/Profile-page">
          <ProfilePage />
        </Route>
        <Route path="/Shopping-cart">
          <ShoppingCartPage />
        </Route>
    <Route exact component={OurHistoryPage} path="/Our-history">
      <OurHistoryPage />
    </Route>
  </Switch>
  </Router>
   </Suspense>
   );
}

export default App;
