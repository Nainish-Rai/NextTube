import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import ChannelDetail from "./pages/ChannelDetail";
import Feed from "./pages/Feed";
import Navbar from "./containers/Navbar";
import SearchFeed from "./pages/SearchFeed";
import SideBar from "./containers/SideBar";
import CategoriesPage from "./pages/CategoriesPage";
import VideoDetails from "./pages/VideoDetails";
import DummySidebar from "./components/DummySidebar";
import PlaylistPage from "./pages/PlaylistPage";
import ChannelPlaylistSection from "./containers/ChannelPlaylistSection";
import ChannelLatestVideos from "./containers/ChannelLatestVideos";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="App h-full w-full text-slate-200 bg-black">
        <div
          className="w-full  
      "
        >
          <ScrollToTop/>
          <Navbar />
          <div className="w-full flex justify-center items-center mt-4">
          <div className="hidden lg:block"> <DummySidebar /></div>
            <div className="w-full">
              <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route
                  path="/search/:searchTerm"
                  exact
                  element={<SearchFeed />}
                />
                <Route
                  path="/categories/:id"
                  exact
                  element={<CategoriesPage />}
                />
                <Route path="/playlist/:id" exact element={<PlaylistPage />} />
                <Route path="/video/:id" exact element={<VideoDetails />} />
                <Route path="/channel/:id" exact element={<ChannelDetail />} >
                <Route path="/channel/:id/latestvideos" element={<ChannelLatestVideos/>}/>
                  <Route path="/channel/:id/playlistsection" element={<ChannelPlaylistSection/>}/>
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
