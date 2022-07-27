import logo from './logo.svg';
import './App.css';
import CounterUseState from './components/useState/CounterUseState';
import GiftUseState from './components/useState/GiftUseState';
import TwoWayBindingUseState from './components/useState/TwoWayBindingUseState';
import TodoListUseState from './components/useState/TodoListUseState';
import ContentUseEffect from './components/useEffect/ContentUseEffect';
import AvatarCleanUpUseEffect from './components/useEffect/AvatarCleanUpUseEffect';
import ChatCleanUpUseEffect from './components/useEffect/ChatCleanUpUseEffect';
import CounterUseLayoutEffect from './components/useLayoutEffect/CounterUseLayoutEffect';
import CountDownUseRef from './components/useRef/CountDownUseRef';
import CounterMemo from './components/memo/CounterMemo';
import CounterUseCallback from './components/useCallback/CounterUseCallback';
import ProductUseMemo from './components/useMemo/ProductUseMemo';
import CounterUseReducer from './components/useReducer/CounterUseReducer';
import TodoUseReducer from './components/useReducer/TodoUseReducer';
import PageUseContext from './components/useContext/PageUseContext';

function App() {
  return (
    <div className="App">
        <CounterUseState></CounterUseState>

        <GiftUseState></GiftUseState>

        <TwoWayBindingUseState></TwoWayBindingUseState>

        <TodoListUseState></TodoListUseState>

        <ContentUseEffect></ContentUseEffect>

        <AvatarCleanUpUseEffect></AvatarCleanUpUseEffect>

        <ChatCleanUpUseEffect></ChatCleanUpUseEffect>

        <CounterUseLayoutEffect></CounterUseLayoutEffect>

        <CountDownUseRef></CountDownUseRef>

        <CounterMemo></CounterMemo>

        <CounterUseCallback></CounterUseCallback>

        <ProductUseMemo></ProductUseMemo>

        <CounterUseReducer></CounterUseReducer>

        <TodoUseReducer></TodoUseReducer>

        <PageUseContext></PageUseContext>
    </div>
  );
}

export default App;
