import Subject from './Subject';

export default abstract class Observer {
  public abstract update(): void;

  constructor(protected subject: Subject) {
    this.subject.addObserver(this);
  }
}
