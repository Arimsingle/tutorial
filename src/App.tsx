import { useState } from "react";
import Profile from "./components/Profile";
const App = () => {
  const myProfile = {
    id: "$001",
    name: "Naruto",
    address: "Japan",
  };
  const [show, setShow] = useState(false);

  // const handleShowProfile = () => {
  //   setShow(!show)
  // };
  return (
    <div className="App">
      <p>My profile</p>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show === true ? (
        <Profile
          id={myProfile.id}
          name={myProfile.name}
          address={myProfile.address}
        />
      ) : (
        "No data"
      )}
    </div>
  );
};

export default App;
