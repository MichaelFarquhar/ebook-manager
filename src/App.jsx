import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
// import { PDFViewer } from './components/PDFViewer.jsx';

function App() {
    return (
        <div>
            <header>
                <Login />
                <Dashboard />
                {/* <PDFViewer /> */}
            </header>
        </div>
    );
}

export default App;
