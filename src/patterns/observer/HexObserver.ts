import Observer from './Observer';
import Subject from './Subject';

export default class HexObserver extends Observer {
  constructor(protected subject: Subject) {
    super(subject);
  }

  public update(): void {
    console.log("Hex: " + this.subject.getState().toString(16));
  }
}
