import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

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
