import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import PostListPage from "./routes/PostlistPage";
import RegisterPage from "./routes/RegisterPage";
import SinglePostPage from "./routes/SinglePostPage";
import WritePage from "./routes/WritePage";

const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* NAVBAR */}
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* BREAKCRUMP */}
      {/* INTRODUCTION  */}
      {/* FEATURED POSTS  */}
      {/* POST LIST */}
    </div>
  );
};

export default App;
