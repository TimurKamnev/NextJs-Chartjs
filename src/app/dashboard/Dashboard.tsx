import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransationBottomRow/TransactionBottomRow";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={4} mt={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
