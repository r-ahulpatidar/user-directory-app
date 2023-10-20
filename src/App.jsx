import { Routes, Route } from "react-router-dom";
import UserList from "./pages/directory/UserList";
import UserDetails from "./pages/user-data/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />

        <Route path="*" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
