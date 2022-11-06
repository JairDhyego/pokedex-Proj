import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

const SkeletonC = () => {
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
    </Container>
  );
};

export default SkeletonC;
