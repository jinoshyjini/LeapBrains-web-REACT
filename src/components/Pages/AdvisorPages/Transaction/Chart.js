import React from "react";
import { Chart } from "react-charts";
import useDemoConfig from "./useDemoConfig";
import ResizableBox from "./ResizableBox";

export default function App() {

  const { data } = useDemoConfig({
    series: 2,
    datums: 6,
    dataType: "ordinal"
  });

  const series = React.useMemo(
    () => ({
      type: "bar"
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false, show: true }
    ],
    []
  );

  return (
    <>
      <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox>
    </>
  );
}