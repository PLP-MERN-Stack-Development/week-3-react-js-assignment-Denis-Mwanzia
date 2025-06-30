import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManager from './components/TaskManager';
import ApiData from './pages/ApiData';
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
