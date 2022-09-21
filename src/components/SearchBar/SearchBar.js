import './SearchBar.css';

export default function SearchBar({ searchHandler }) {
  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const query = formData.get('query');
    searchHandler(query);
  };

  return <form onSubmit={(e) => onFormSubmit(e)}>
    <input name='query'/>
    <button>Search</button>
  </form>;
}
