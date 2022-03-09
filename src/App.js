import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/ALLMeetup";
import NewMeetupsPage from "./pages/NewMeetup";
import FavouritePage from "./pages/Favourite";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupsPage />}></Route>
        <Route path="/favorites" element={<FavouritePage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
