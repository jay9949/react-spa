// import { Route, BrowserRouter, Routes } from "react-router-dom";

// import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
// import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";

// function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" exact>
//           <HomePage />
//         </Route>
//         <Route path="/auth">
//           <AuthPage />
//         </Route>
//         <Route path="/profile">
//           <UserProfile />
//         </Route>
//       </Routes>
//     </Layout>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
