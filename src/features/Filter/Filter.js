import React from "react";

const Filter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="container-fuild" id="filter">
      <form onSubmit={handleSubmit}>
        <label>Click the box to filter</label>
        <label htmlFor="">
         <input type="checkbox" name="" value="" className="" />
         Test 1
        </label>
        <label htmlFor="">
         <input type="checkbox" name="" value="" className="" />
         Test 2
        </label>
        <label htmlFor="">
         <input type="checkbox" name="" value="" className="" />
         Test 3
        </label>
        <label htmlFor="">
         <input type="checkbox" name="" value="" className="" />
         Test 4
        </label>
        <input type="submit" />
      </form>
    </section>
  )
}

export default Filter;