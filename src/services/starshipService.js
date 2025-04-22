// import React from "react";

// const index = async () => {
//   try {
//     const res = await fetch("https://swapi.info/api/starships");
//     if (!res.ok) {
//       throw new Error("Failed to fetch starships.");
//     } else {
//       const data = await res.json();
//       return data;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default { index };

// import React, { useEffect, useState } from "react";

// const index = () => {
//   let url = "https://swapi.info/api/starships";
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://swapi.info/api/starships");
//       if (!res.ok) {
//         throw new Error("request error");
//       }
//       const resData = await res.json();
//       setData(resData);
//     } catch (error) {
//       console.log(error);
//       throw new Error("network error");
//     }
//   };
//   return [data, fetchData];
// };

// export default index;
