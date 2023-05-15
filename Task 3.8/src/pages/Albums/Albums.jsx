import '../pages-style/UserDetails.css'

const Albums = ({ albums }) => {

  return (
    <div className="wrapper-albums">
      <h2 className='title'>Albums</h2>
      <ul className='list'>
        {albums.map((e) => (
            <li key={e.id} className="list-item">
                <p>{e.title}</p>
            </li>

        ))}
      </ul>
    </div>
  );
};

export default Albums;
