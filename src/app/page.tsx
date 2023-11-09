"use client";

import { StyledEngineProvider } from "@mui/material";
import { PieChart } from "@mui/x-charts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StyledEngineProvider injectFirst>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </StyledEngineProvider>
    </main>
  );
}
