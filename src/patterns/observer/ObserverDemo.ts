import Subject from './Subject';
import BinObserver from './BinObserver';
import OctObserver from './OctObserver';
import HexObserver from './HexObserver';

function main() {
  const subject = new Subject();

  new BinObserver(subject);
  new OctObserver(subject);
  new HexObserver(subject);

  console.log("begin change");
  subject.setState(1);
  subject.setState(2);
  subject.setState(3);
  subject.setState(4);
  subject.setState(8);
  console.log("finish");
}

main();
