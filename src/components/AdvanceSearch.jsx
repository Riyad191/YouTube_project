import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from ".";

const AdvanceSearch = () => {
  const [videos, setVideos] = useState(null);
  const { searchContect } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchContect}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchContect]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={901}
        color="#fff"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Results for <span style={{ color: "#FC1503" }}>{searchContect}</span>{" "}
        videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default AdvanceSearch;
