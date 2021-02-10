import logo from './logo.svg';
import './App.css';
import books from './data/books.json';
import Book from './Book.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {books.map(b => <Book name={b.name} author={b.author} regions={b.regions} />)}
      </header>
    </div>
  );
}

export default App;
