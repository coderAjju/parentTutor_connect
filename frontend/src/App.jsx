import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound";
import ParentRegistration from "./components/authPage/ParentRegistration";
import ParentDashboard from "./components/parentPages/Dashboard";
import ParentProfile from "./components/parentPages/ParentProfile";
import Appointments from "./components/parentPages/Appointments";
import Message from "./components/parentPages/Message";
import TutorSearchPage from "./components/TutorPage/TutorSearchPage";
import Login from "./components/authPage/Login";
import TutorDetail from "./components/TutorPage/TutorDetail";
import AboutPage from "./components/AboutPage";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<ParentRegistration />} />
          <Route path="/search/tutors" element={<TutorSearchPage />} />
          <Route path="/parent/dashboard" element={<ParentDashboard />}>
            {/* Define child routes under the parent route */}
            <Route path="profile" element={<ParentProfile />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="messages" element={<Message />} />
          </Route>

          <Route path="/tutor/detail-page/:tutorId" element={<TutorDetail />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
