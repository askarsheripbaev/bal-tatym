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
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/useful-articles">
          <UsefulArticlesPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/profile-page">
          <ProfilePage />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
    <Route exact component={OurHistoryPage} path="/our-history">
      <OurHistoryPage />
    </Route>
  </Switch>
  </Router>
   </Suspense>
   );
}

export default App;
