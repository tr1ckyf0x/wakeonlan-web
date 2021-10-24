import './App.css';
import { PrivacyPolicy } from './PrivacyPolicy';
import SupportForm from "./SupportForm";
import SupportFormHeader from './SupportFormHeader';

const App: React.FC = () => (
  <div className="App-container">
    <SupportFormHeader />
    <SupportForm />
    <PrivacyPolicy />
  </div>
);

export default App;
