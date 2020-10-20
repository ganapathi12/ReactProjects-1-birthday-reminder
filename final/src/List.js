import React from 'react';
import data from './data';

const List = () => {
  const [people,setPeople]=React.useState(data)
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
         const removeItem=(id)=>{
        let newPeople=people.filter((person)=>person.id!==id)
        setPeople(newPeople)

      }
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className="btn" onClick={()=>removeItem(id)}>remove</button>
            </div>
          </article>
        );
      })}
      <button onClick={() => setPeople([])}>clear all</button>
    </>
  );
};

export default List;
