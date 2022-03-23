import React, { useState } from "react";


const Search = () => {
  const {term, setTerm} = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="container-fluid" onSubmit={handleSubmit}>
      <form>
        <input  type="text" value={term} onChange={(e) => {
          setTerm(e.target.value)
        }} />
        <input  type="submit"/>
      </form>
    </section>
  )
}

export default Search;