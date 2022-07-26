import logo from './logo.svg';
import './App.css';
import CounterUseState from './components/useState/CounterUseState';
import GiftUseState from './components/useState/GiftUseState';
import TwoWayBindingUseState from './components/useState/TwoWayBindingUseState';
import TodoListUseState from './components/useState/TodoListUseState';

function App() {
  return (
    <div className="App">
        <CounterUseState></CounterUseState>

        <GiftUseState></GiftUseState>

        <TwoWayBindingUseState></TwoWayBindingUseState>

        <TodoListUseState></TodoListUseState>
    </div>
  );
}

export default App;
