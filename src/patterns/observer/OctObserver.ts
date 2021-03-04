import Observer from './Observer';
import Subject from './Subject';

export default class OctObserver extends Observer {
  constructor(protected subject: Subject) {
    super(subject);
  }

  public update(): void {
    console.log("Oct: " + this.subject.getState().toString(8));
  }
}
