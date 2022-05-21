import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './Components';
import {
    DescriptionPage,
    LocationPage,
    LoginPage,
    MapPage,
    MenuPage,
    OneRestaurantPage,
    PhotosPage, RegisterPage,
    RestaurantListPage, UserPage
} from './Pages';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<RestaurantListPage/>}/>
                <Route path={'/place/:id'} element={<OneRestaurantPage/>}>
                    <Route index element={<DescriptionPage/>}/>
                    <Route path={'/place/:id/photos'} element={<PhotosPage/>}/>
                    <Route path={'/place/:id/menu'} element={<MenuPage/>}/>
                    <Route path={'/place/:id/map'} element={<MapPage/>}/>
                    <Route path={'/place/:id/location'} element={<LocationPage/>}/>
                </Route>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
