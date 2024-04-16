import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Signup.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DATABASE_REFERENCE } from "./firebase";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { database } from "./firebase";
import { ref, onValue } from "firebase/database";
import ListSection from "./Components/ListSection/ListSection";

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state
  const [list, setList] = useState([]);

  useEffect(() => {
    // Reference to your database path
    const listDatabaseRef = ref(database, DATABASE_REFERENCE);

    onValue(listDatabaseRef, (snapshot) => {
      const fetchedData = snapshot.val();
      if (fetchedData) {
        setList(Object.values(fetchedData));
      }
    });

    if (list) {
      navigate("/list-1");
    }

    return () => {};
  }, []);

  useEffect(() => {
    const checkLoading = async () => {
      setLoading(false);
    };
    checkLoading();
  }, []);

  if (loading) {
    return <div></div>; // Render loading state while checking admin status
  }

  return (
    <>
      <ToastContainer />

      {list && (
        <Routes>
          <Route path="/list-1" element={<ListSection list={list} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
