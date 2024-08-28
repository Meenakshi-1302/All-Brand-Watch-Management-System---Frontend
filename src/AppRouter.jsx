import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import Sidebar from './Admin/SideBar';
import CustomersTable from './Admin/CustomersTable';
import AdminNavbar from './Admin/AdminNavbar';
import InventoryTable from './Admin/InventoryTable';
import ProductTable from './Admin/ProductTable';
import SupplierTable from './Admin/SupplierTable';
import Login from './Login';
import ProductForm from './Admin/ProductForm';
import ProductUpdate from './Admin/ProductUpdate';
import SupplierUpdate from './Admin/SupplierUpdate';
import SupplierForm from './Admin/SupplierForm';
import InventoryForm from './Admin/InventoryForm';
import InventoryUpdate from './Admin/InventoryUpdate';
import LandingPage from './LandingPage';
import HomePage from './User/HomePage';
import Header from './User/Header';
import WatchCatalogPage from './User/WatchCatelogPage';
import WatchDetailsPage from './User/WatchDetailsPage';
import UserProfilePage from './User/UserProfilePage';
import ContactPage from './User/ContactPage';
import AboutPage from './User/AboutPage';
import CartPage from './User/CartPage';
import PaymentPage from './User/PaymentPage';
import PurchaseSummaryPage from './User/PurchaseSummaryPage';
import OrdersPage from './User/OrdersPage';
import RegistrationForm from './RegistrationForm';


function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
            <Route path="/admin-dashboard" element={<Dashboard/>}/>
            <Route path="/sidebar" element={<Sidebar/>}/>
            <Route path="/customers-view" element={<CustomersTable/>}/>
            <Route path="/admin-navbar" element={<AdminNavbar/>}/>
            <Route path="/inventory-view" element={<InventoryTable/>}/>
            <Route path="/product-view" element={<ProductTable/>}/>
            <Route path="/supplier-view" element={<SupplierTable/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add-product" element={<ProductForm/>}/>
            <Route path="/product-update/:id" element={<ProductUpdate/>}/>
            <Route path="/supplier-update/:id" element={<SupplierUpdate/>}/>
            <Route path="/supplier-add" element={<SupplierForm/>}/>
            <Route path="/inventory-add" element={<InventoryForm/>}/>
            <Route path="/inventory-update/:id" element={<InventoryUpdate/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/watch-catelog" element={<WatchCatalogPage/>}/>
            <Route path="/watch-details/:id" element={<WatchDetailsPage/>}/>
            <Route path="/userprofile-page" element={<UserProfilePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout" element={<PaymentPage/>}/>
            <Route path="purchase-summary" element={<PurchaseSummaryPage/>}/>
            <Route path="orders" element={<OrdersPage/>}/>
            <Route path="/register" element={<RegistrationForm/>}/>



            


           














        </Routes>
    </Router>
  )
}

export default AppRouter
