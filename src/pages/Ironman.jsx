import React, { useEffect, useState } from "react";

const IronMan = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      // hardcode values just for demo
      const ts = 1;
      const publicKey = "f715c78a2b04f9a69f4d9fd16dd65c81";
      const privateKey = "YOUR_PRIVATE_KEY";
      const hash = "YOUR_MD5_HASH"; // precomputed hash = md5(ts + privateKey + publicKey)

      const url = `https://gateway.marvel.com/v1/public/characters?name=Iron%20Man&ts=${ts}&apikey=${publicKey}`;

      const res = await fetch(url);
      const data = await res.json();
      if (data.data.results.length > 0) {
        setCharacter(data.data.results[0]);
      }
    };

    fetchCharacter();
  }, []);

  if (!character) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p style={{ maxWidth: "500px", margin: "1rem auto" }}>
        {character.description || "No description available."}
      </p>
    </div>
  );
};

export default IronMan;
