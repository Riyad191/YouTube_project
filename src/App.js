import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelInfo,
  VideoInfo,
  AdvanceSearch,
  Header,
  Feed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoInfo />} />
        <Route path="/channel/:id" element={<ChannelInfo />} />
        <Route path="/search/:searchTerm" element={<AdvanceSearch />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
