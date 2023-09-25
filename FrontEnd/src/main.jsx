import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loanpage from './components/Loanpage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Router>
    <Routes>
      <Route path='/' element={<App/>}  />
      <Route path='/Loan' element={<Loanpage/>}/>
    </Routes>
  </Router>
  </>
)
