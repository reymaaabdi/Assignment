import './style.css'
import Nalka from './components/Nalka/Nalka'
import Names from './components/Names/Names'
import PageNumber from './components/Page Number/PageNumber'
import Writing from './components/Writing/Writing'
import Counter from './components/Counter/Counter'
const App = () => {
    return (
        <div className='container'>
            <Nalka />
            <Names />
            <PageNumber />
            <Writing />
            <Counter />
        </div>
    );
};
export default App;
