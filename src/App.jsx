import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Card from './Card';
import { useState } from 'react';

function App() {
  
  const [items,setItems] = useState([]);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [done,setDone] = useState('btn btn-primary d-none')
  const [doneP,setDoneP] = useState(0)
  const [showDropdown,setShowDropdown] = useState(false);
  const [filter, setFilter] = useState('all');

  function Delete(obj){
    var ind = items.indexOf(obj)
    setItems(items.splice(ind,1));
    setItems([...items])
  }  

  function Edit(obj){
    setName(obj.TName);
    setDescription(obj.TDescription);
    setDone('btn btn-primary');
    var ind = items.indexOf(obj);
    const newItems = [...items];
    if(newItems[ind].completed)   
      newItems[ind].completed= false;
    setDoneP(ind);
  }

  function handleDone(inde){
    setItems(items[inde].TName = name , items[inde].TDescription = description);
    setItems([...items]);
    setDone('btn btn-primary d-none');
    setDescription('');
    setName('');
  }

  function handleAdd(){
    if (name.trim() !== '') 
    {
      const newTask = {TName: name, TDescription: description, completed: false}

      setItems([...items,newTask]);
      setDescription('');
      setName('');
    }
  }

  function handleComplete(index)  
  {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  }

  function handleFilterChange(newFilter)
  {
    setFilter(newFilter);
    setShowDropdown(false);
  }

  function changeName(e){
    setName(e.target.value);
  }
  function changeDescription(e){
    setDescription(e.target.value);
  }

  const filteredTasks = items.filter((item) => {
    if (filter === 'all') return true;
    return item.completed === (filter === 'completed');
  });

  return (
    <div className="app">
      <div className='container-fluid'>
        <header className='bg-warning' style={{fontFamily: "Lobster"}}>
          <h1 className='text-center display-4 text-success m-0 p-3'>MY TO-DO</h1>
        </header>
        <header style={{backgroundColor:"rgb(255, 255, 170)", fontFamily: "Lobster"}}>
          <div className='row justify-content-lg-start justify-content-center p-5'>
            <div className='col-md-1 d-none d-lg-block'></div>
            <div className='col-lg-4 col-md-6 mb-lg-0 mb-3'>
              <input className='form-control shadow border-success border-2' type='text' value={name} onChange={changeName} placeholder='ToDO Name'></input>
            </div>
            <div className='col-lg-4 col-md-6 mb-lg-0 mb-3'>
            <input className='form-control shadow border-success border-2' type='text' value={description} onChange={changeDescription} placeholder='ToDo Description'></input>
            </div>
            <div className='col-lg-2 col-12 text-center mb-lg-0 mb-3'>
              <button className='btn btn-success' onClick={handleAdd}>Add ToDo</button>
            </div>
            <div className='col-lg-1 col-12 text-center'><button className={done} onClick={() => handleDone(doneP)}>Save</button></div>
          </div>
        </header>
        <header className='bg-warning text-light' style={{fontFamily: "Lobster"}}>
          <div className='row p-5'>
            <div className='col'><h3>My Todos</h3></div>
            <div className='col d-flex justify-content-end'><h3>Status filter : </h3>
            <div className="btn-group ms-2">
                <button
                  type="button"
                  className={`btn btn-secondary dropdown-toggle${showDropdown ? 'show' : ''}`}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {filter === 'all' ? 'All' : filter === 'completed' ? 'Completed' : 'Incomplete'}
                </button>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  <li>
                    <button className="dropdown-item" onClick={() => handleFilterChange('all')}>
                      All
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleFilterChange('completed')}>
                      Completed
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={() => handleFilterChange('incomplete')}>
                      Incomplete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <header style={{backgroundColor:"rgb(255, 255, 170)"}}>
          <div className='row p-5'>
            {filteredTasks.map((data,index) => <Card key={index} data={data} Delete={Delete} Edit={Edit} onComplete={() => handleComplete(index)}></Card>)}
          </div>
        </header> 
      </div>
    </div>
  );
}

export default App;
