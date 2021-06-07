import '../styles/browse.css';
import Pasta from './Pasta';
import Seafood from './Seafood';
import Steak from './Steaks';



const Browse = () => {
    return (
        <div className='browse' >
            <Pasta />
            <Seafood />
            <Steak />
        </div>
    );
}

export default Browse;