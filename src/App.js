import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import BrowsePage from './Pages/BrowsePage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import ItemDetailPage from './Pages/ItemDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Homepage />} />
      <Route path='browse' element={<BrowsePage />} />
      <Route path='sign-up' element={<SignUpPage />} />
      <Route path='sign-in' element={<SignInPage />} />
      <Route path='item/:id' element={<ItemDetailPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
