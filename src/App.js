import './App.css';
import { Typography } from 'antd';

const { Title} = Typography;

function App() {
  return (
    <div>
        <div className="title">
            <Title>Welt des <span className="titleFussball">Fussballs</span></Title>
        </div>
      </div>
  );
}

export default App;
