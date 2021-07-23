import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { depositMoney, withdrawlMoney} from './redux/actions/actions';
import { bindActionCreators } from 'redux';
const actionCreators = { depositMoney, withdrawlMoney };

function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawlMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button> 
      <button onClick={() => withdrawlMoney(1000)}>Withdraw</button> 
    </div>
  );
}

export default App;
