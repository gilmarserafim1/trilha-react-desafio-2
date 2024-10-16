import './styles.css';
import logo from '../../assets/images/github.png'
import Search from '../../components/Search'
import ItemList from '../../components/ItemList';
import { useState } from 'react';
import axios from 'axios';

function Home() {

    const [userInput, setUserInput] = useState('');
    const [repos, setRepos] = useState([]);


    const handleSearchButton = async() => {

        try{
            const response = await axios.get(`https://api.github.com/repos/${userInput}`);
            const newRepo = response.data;

            const exist = repos.find(repo => repo.id === newRepo.id);

            if(exist)
                alert('already included');
            else 
                setRepos(prev => [...prev, newRepo]); 

        } catch(error){
            alert('does not exists');
        }  
    };

    const handleDelete = (id) => {
        const newRepos = repos.filter(repo => repo.id !== id);
        setRepos(() => newRepos);
    }

    return (
        <div className="App">
            <div className='headerLogo'>
                <img className='logo' src={logo} alt='logo'/>
            </div>

            <Search 
                userInput={userInput} 
                onChange={event => setUserInput(event.target.value)}
                onClick={handleSearchButton} />

            {repos.map(repo => <ItemList key={repo.id} repo={repo} onClick={() => handleDelete(repo.id)} />)}

            
        </div>
    );
}

export default Home;
