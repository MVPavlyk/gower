import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './Components';
import {RestaurantListPage} from './Pages';

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<RestaurantListPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
