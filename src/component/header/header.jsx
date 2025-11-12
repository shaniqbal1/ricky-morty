import Heading from "../heading/heading";
import { Link } from "react-router";
import { Input,AutoComplete } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacters } from "../../app/characterSlice";
const { Search: SearchInput } = Input;
function Header() {
    const [search, setSearch] = useState("");
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const onSearch = (value) => {
    if (!value.trim()) return;
    dispatch(fetchCharacters({ page: 1, query: value }));
    setHistory((prev) => [value, ...prev.filter((item) => item !== value)]);
    setSearch("");
 }

  return (
    <div  style={{
            display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "12px 40px",
        background: "linear-gradient(90deg, #808080 0%, #A9A9A9 100%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        boxSizing: "border-box",
        
      }}>
      <Link to="/"   style={{
          textDecoration: "none",
          color: "#d45151ff",
          fontSize: "22px",
          fontWeight: "600",
        }}>
      <Heading heading="Rick and Morty" level={3} />
      </Link>
      
        <AutoComplete
        options={history.map((item) => ({ value: item }))}
        style={{ width: 350 }}
        value={search}
        onChange={(value) => setSearch(value)}
        onSelect={(value) => onSearch(value, false)}
      >
        <SearchInput
          placeholder="Search character"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSearch={(value) => onSearch(value, true)}
          enterButton
          size="large"
        />
      </AutoComplete>
   
    </div>
  );
}

export default Header;