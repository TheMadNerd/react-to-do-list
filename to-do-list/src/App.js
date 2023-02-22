
import './App.css';

function App() {

  const current = new Date();
  const date = `${current.getFullYear()}-${('0' + current.getMonth()).slice(-2)}-${('0' + current.getDate()).slice(-2)}`;

  return (
    <div className="App">
      <div className='TaskAdd'>
        <div>
          <input type='text' placeholder='Add task'></input>
          <input type='checkbox' />Priority
        </div>
          Do kiedy zrobić <input type='date' value={date} />
          <button>Add</button>
      </div>
      <div className='TaskToDo'>
        <h1>Tasks to do</h1>
      </div>
      <div className='TaskDone'>
        <h2>Tasks already done ()</h2>
      </div>
    </div>
  
  );
}

export default App;
