import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Cookies from 'js-cookie';
import {Layout} from './Components';
import {
    DescriptionPage,
    LocationPage,
    LoginPage,
    MapPage,
    MenuPage,
    OneRestaurantPage,
    PhotosPage, RegisterPage,
    RestaurantListPage, UserPage,
    CooperationPage, OwnerPage, UnfoundPage, BookingPage, AdminPage
} from './Pages';

import {useDispatch, useSelector} from 'react-redux';
import {getLanguage, getTheme, getUser, setRolesFromLocalStorage, setUserFromLocalStorage} from './store';

function App() {
    const {isUser} = useSelector(state => state['userReducers']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        dispatch(getTheme());
        dispatch(getLanguage());
    }, []);

    useEffect(() => {
        dispatch(setUserFromLocalStorage());
        dispatch(setRolesFromLocalStorage());
    }, [isUser]);


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
                <Route path={'/admin'} element={<AdminPage/>}/>
                <Route path={'/user'} element={<UserPage/>}/>
                <Route path={'/myPlaces'} element={<OwnerPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/cooperation'} element={<CooperationPage/>}/>
                <Route path={'/myBookings'} element={<BookingPage/>}/>
                <Route path={'*'} element={<UnfoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
