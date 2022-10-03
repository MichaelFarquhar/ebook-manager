import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';
import { PDFViewer } from './components/PDFViewer';
import { NotFound } from './NotFound';

function App() {
    return (
        <div>
            <header>
                <Routes>
                    <Route index path="/" element={<Dashboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="file/:filename" element={<PDFViewer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <PDFViewer /> */}
            </header>
        </div>
    );
}

export default App;
