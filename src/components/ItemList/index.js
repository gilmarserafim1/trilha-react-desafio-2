import './styles.css'

function ItemList({repo, onClick}){
    return (
        <div className="item">
            <a href={`https://github.com/${repo.full_name}`} 
                target='_blank' 
                className="itemTitle" 
                rel="noreferrer">
                {repo.name}
            </a>

            <h2 className="itemDdescription">{repo.full_name}</h2>
           
            <button 
              className="delete"
              onClick={onClick} >
              Delete
            </button>
            <hr/>
        </div>        
    );
}

export default ItemList;