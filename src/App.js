import CharList from "./components/CharList";
import Header from "./components/Header";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [detail, setDetail] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let api = "https://rickandmortyapi.com/api/character/";
      if (search !== "") {
        api = api + "?name=" + search;
      }
      const response = await fetch(api);
      const data = await response.json();

      console.log(data);
      setCharacters(data.results);
    };

    fetchData();
  }, [search]);

  const showDetail = (id) => {
    setDetail(id);
    setShowModal(true);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Search onChange={setSearch} search={search} />
      {characters ? (
        <CharList characters={characters} onClick={showDetail} />
      ) : (
        <h2 className="text-2xl font-bold text-center">No Results</h2>
      )}

      {showModal && <Modal id={detail} onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default App;
