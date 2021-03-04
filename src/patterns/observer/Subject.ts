import Observer from './Observer';

export default class Subject {
  private observers: Array<Observer> = new Array<Observer>();
  private state: number = 0;

  public addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public getState(): number {
    return this.state;
  }

  public setState(newState: number) {
    this.state = newState;
    this.execute();
  }

  private execute(): void {
    for (const o of this.observers) {
      o.update();
    }
  }
}
