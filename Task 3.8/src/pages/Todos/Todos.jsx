import '../pages-style/UserDetails.css'

const Todos = ({ todos }) => {
  return (
    <div className="wrapper-albums">
      <h2 className='title'>Todos</h2>
      <ul className='list'>
        {todos.map((e) => (
            <li key={e.id} className="list-item__todo">
                <p>{e.title}</p>
                <input type="checkbox" name="" id={e.id} defaultChecked={e.completed}/>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
