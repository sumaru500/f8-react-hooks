import logo from './logo.svg';
import './App.css';
import CounterUseState from './components/CounterUseState';
import GiftUseState from './components/GiftUseState';
import TwoWayBindingUseState from './components/TwoWayBindingUseState';
import TodoListUseState from './components/TodoListUseState';

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
