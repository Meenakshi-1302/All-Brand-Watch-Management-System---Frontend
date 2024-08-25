import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import HomePage from './Components/HomePage';
import RegistrationPage from './Components/Register';
import AddWatchForm from './Components/AddWatches';
import AddSupplierForm from './Components/AddSupliersForm';
import AddInventoryForm from './Components/AddInventoryForm';
import UpdateWatchForm from './Components/UpdateWatch';
import UpdateInventoryForm from './Components/UpdateInventory';
import UpdateSupplierForm from './Components/UpdateSupplierForm';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import UserProfilePage from './Components/UserProfilePage';
import WatchCategoryPage from './Components/WatchCatergoriesPage';
import WatchCatalogPage from './Components/WatchCatelogPage';
import CartPage from './Components/CartPage';
// import WatchDetailPage from './Components/WatchDetails';
import LandingPage from './Components/LandingPage';
import ForgotPasswordPage from './Components/ForgetPasswordPage';
import ProductDetail from './Components/WatchDetailsPage';
import ProductForm from './Components/ProductForm';
import Header from './Components/Header';
import WatchCard from './Components/WatchCard';
import CategoryDetailsPage from './Components/CategoryDetailsPAge';
import CartSummaryPage from './Components/CartSummaryPage';
import PaymentPage from './Components/PaymentPage';
import ThankYouPage from './Components/ThankyouPage';
// import AddCategory from './Components/AddCategory';



 
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-watch" element={<AddWatchForm/>}/>
        <Route path="/add-supplier" element={<AddSupplierForm/>}/>
        <Route path="/add-inventory" element={<AddInventoryForm/>}/>
        <Route path="/watch/:id" element={<UpdateWatchForm/>}/>
        <Route path="/inventory/:id" element={<UpdateInventoryForm/>}/>
        <Route path="/supplier/:id" element={<UpdateSupplierForm/>}/>
        <Route path="/about-page" element={<AboutPage/>}/>
        <Route path="/contact-page" element={<ContactPage/>}/>
        <Route path="/userprofile-page" element={<UserProfilePage/>}/>
        <Route path="/watch-category" element={<WatchCategoryPage/>}/>
        <Route path="/watch-catelog" element={<WatchCatalogPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        {/* <Route path="/watch-detail" element={<WatchDetailPage/>}/> */}
        <Route path="/watch-details/:id" element={<ProductDetail/>}/>
        <Route path="/add-product" element={<ProductForm/>}/>
        <Route path="/watchCard" element={<WatchCard/>}/>
        <Route path="/category-details/:categoryName" element={<CategoryDetailsPage/>}/>
        <Route path="/checkout" element={<CartSummaryPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/ThankyouPage" element={<ThankYouPage/>}/>
        {/* <Route path="/add-category" element={<AddCategory/>}/> */}
        <Route path="*" element={<Header to="/" replace />} />
        
        
      </Routes>
    </Router>
  );
};
 
export default AppRouter;