import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleTable from "../components/PeopleTable";
import Pagination from "../components/Pagination";

const People = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${currentPage}`
      );
      setPeople(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10)); // Assuming 10 people per page
    };
    fetchPeople();
  }, [currentPage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Star Wars Characters</h1>
      <PeopleTable people={people} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default People;
