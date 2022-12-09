import './App.css';
import ButtonAction from './components/ButtonAction';
import EmployeeTable from './components/EmployeeTable';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="App container">
      <FormInput />
      <ButtonAction />
      <EmployeeTable />
    </div>
  );
}

export default App;
