import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { increase,increaseByMount,decrease} from './store/reducer';

function App(props) {

  const dispatch = useDispatch()

  const number = useSelector(state=>state.counter.number)

  let mount = 0;

  const onMountChange = (e) => {
    mount = parseInt(e.target.value)
  }

  const increaseMount = () => {
    dispatch(increaseByMount(mount))
  }

  return (
    <div>
      Current number is: {number}
      <ul>
        <li>
          <button onClick={()=>dispatch(increase())}>+1</button>
        </li>
        <li>
          <button onClick={()=>dispatch(decrease())}>-1</button>
        </li>
        <li>
          <button onClick={()=>increaseMount()}>+</button><input type={'number'} id='mount' onChange={onMountChange} defaultValue={0}></input>
        </li>
      </ul>
    </div>
  );
}

export default App;