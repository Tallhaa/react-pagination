import { useState, useEffect } from "react";
import "./App.css";
import Paginatin from "./Components/Paginatin";

function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);
  const getData = async () => {
    let result = await fetch(
      `https://dummyjson.com/users?limit=${5}&skip=${(page - 1) * 5}`
    );
    result = await result.json();
    console.log(result);
    setData(result.users);
    setTotal(result.total);
  };
  // useEffect(() => {
  // }, [data]);
  // let pgNo = Math.ceil(data.length / 5);

  // const limit = 5;
  // const skip = limit * page;
  // const skipresult = data.slice(page === 1 ? 0 : skip - limit, skip);
  // let result = [];
  // for (let i = 1; i <= pgNo; i++) {
  //   result.push(i);
  // }
  // console.log(result);

  // const handleNext = () => {
  //   if (page === pgNo) {
  //     return page;
  //   } else {
  //     return setPage(page + 1);
  //   }
  // };
  // const handlePrev = () => {
  //   if (page === 1) {
  //     return page;
  //   } else {
  //     setPage(page - 1);
  //   }
  // };
  // const handlePagination = (selectedPage) => {
  //   setPage(selectedPage);
  // };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length ? (
            data.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>loading</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <div className="pagination">
        <button onClick={handlePrev}>Prev</button>
        {result.map((item, i) => (
          <button onClick={() => handlePagination(item)} key={i}>
            {item}
          </button>
        ))}
        <button onClick={handleNext}>Next</button>
      </div> */}
      <Paginatin data={data} total={total} page={page} setPage={setPage} />
    </>
  );
}

export default App;
