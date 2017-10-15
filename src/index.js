import PlotArea from './lib/PlotArea';
import DataList from './lib/containers/DataList';
import DataSet from './lib/containers/DataSet';

const list1 = new DataList([5, 24, 12, 37, 9]);
const list2 = new DataList([6, 10, 33, 12, 11]);

const ds = new DataSet();
ds.push(list1);
ds.push(list2);

const myArea = new PlotArea({
  width: 1000,
  height: 1000,
});

myArea.drawBars();

exports.getImage = () => myArea.getDataUri();
