// import { createContext, useState } from "react";
// import TimeContext from "./TimeContext";

// const useTime = () => createContext(TimeContext);

// function TimeProvider({ children }) {
//   const [time, setTime] = useState("");

//   function getTime() {
//     setTimeout(() => {
//       const dateObj = new Date();
//       const currTime = dateObj.toLocaleTimeString("en-GB");
//       setTime(currTime);
//     }, 1000);
//   }

//   return (
//     <TimeContext.Provider value={{ time, getTime }}>
//       {children}
//     </TimeContext.Provider>
//   );
// }

// export { TimeProvider, useTime };
