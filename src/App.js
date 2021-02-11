import logo from './logo.svg';
import './App.css';
import books from './data/books.json';
import Book from './Book.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="split left">
          <h1>Map</h1>
        </div>
        <div class="split right">
          <img src={logo} className="App-logo" alt="logo" />
          {books.map(b => <Book name={b.name} author={b.author} regions={b.regions} />)}
        </div>
      </header>
    </div>
  );
}

export default App;
