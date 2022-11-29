import './App.css';
import Mycomponent from './MyComponent.js';
import Say from './Say.js';

function test01() {
    const name = 'React Test';
    const status = 'on';
    return (<>
        {status === 'on' ? (<h1>{name} is running</h1>) : (<h2>{name} is not running</h2>)}
    </>);
}

function test02() {
    const name = undefined;
    return <div className="react">
        <h1>{name || '리액트'}</h1>
    </div>

}

function test03() {
    const name = '리액트';
    return (<>
        <div className="react">
            <h1>  {name}</h1>
        </div>
        <input/>
    </>)
}

const App = () => {
    return <Say />;
}

// function App() {
//
//     return (test03());
// }

export default App;
