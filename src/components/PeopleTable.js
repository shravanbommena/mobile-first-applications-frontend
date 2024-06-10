import React from "react";

const PeopleTable = ({ people }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Height</th>
          <th className="py-2">Mass</th>
          <th className="py-2">Hair Color</th>
          <th className="py-2">Skin Color</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.name}>
            <td className="py-2 px-4 border">{person.name}</td>
            <td className="py-2 px-4 border">{person.height}</td>
            <td className="py-2 px-4 border">{person.mass}</td>
            <td className="py-2 px-4 border">{person.hair_color}</td>
            <td className="py-2 px-4 border">{person.skin_color}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
