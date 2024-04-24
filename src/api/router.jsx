import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Delete from '../pages/Delete';


const RoutesConfig = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route index element={<Read />} />
            <Route path="Crear" element={<Create />} />
            <Route path="Borrar" element={<Delete />} />
            <Route path="*" element={<div>404</div>} />
        </Route>
    </Routes>
);

export default RoutesConfig;