import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';
// import { PDFViewer } from './components/PDFViewer.jsx';

function App() {
    return (
        <div>
            <header>
                <Routes>
                    <Route index path="/" element={<Dashboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
                {/* <PDFViewer /> */}
            </header>
        </div>
    );
}

export default App;
