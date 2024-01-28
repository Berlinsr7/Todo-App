import 'bootstrap/dist/css/bootstrap.css'
import './App.css';


function Card({k,data,Delete,Edit,onComplete}) 
{    
  return (
    <div className='col-lg-4 col-md-6' style={{fontFamily: "Bebas Neue"}}>
        <div className="card shadow p-3 mb-4" style={{backgroundColor:'rgb(250, 250, 210)'}}>
        <p>Name : {data.TName}</p>
        <p>Description : {data.TDescription}</p>
        <div className="d-flex">
            <p>Status : </p>
            <button className={`btn ${data.completed ? 'btn-success' : 'btn-warning'} btn-sm ms-2`} onClick={onComplete}>
            {data.completed ? 'Completed' : 'Incomplete'}
            </button>
        </div>
        <div className="text-end me-5 mt-5">
            <button className="btn btn-success me-2" onClick={() => Edit(data)}>Edit</button>
            <button className="btn btn-danger" onClick={()=> Delete(data)}>Delete</button>
        </div>
        </div>
    </div>
  );
}

export default Card;
