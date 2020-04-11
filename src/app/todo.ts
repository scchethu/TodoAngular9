export class Todo {

  public id: number;
  public task: string;
  public date: Date;
  public isChecked = false;

  constructor(id: number, task: string, date: Date) {
    this.id = id;
    this.task = task;
    this.date = date;
  }

}
