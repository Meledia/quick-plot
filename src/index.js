import PlotArea, { PlotAreaOptions } from './lib/PlotArea';
import DataList from './lib/containers/DataList';
import DataSet from './lib/containers/DataSet';

export const BarGraph = async (
  opts: PlotAreaOptions,
  xVals: Array<number> = [],
  yVals: Array<number> = [],
) => {
  const barPlot = new PlotArea(opts);
  const xs = new DataList(xVals);
  const ys = new DataList(yVals);
  const barSet = new DataSet();
  barSet.push(xs);
  barSet.push(ys);

  const success = await barPlot.plotBars(barSet);
  if (success) {
    return barPlot.getDataUri();
  }
  throw new Error("Couldn't plot data as a bar graph.");
};

export const LineGraph = () => {
  const linePlot = new PlotArea();
};
