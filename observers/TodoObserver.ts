type subscriber = (tasks:string[])=>void;

class TodoObserver {
    private subscribers:subscriber[]=[];
    private tasks:string[]=[];
    subscribe(fn:subscriber){
        this.subscribers.push(fn);
    }
    addTask(task:string){
        this.tasks.push(task);
        this.notify();
    }
    private notify(){
        this.subscribers.forEach((s)=>s(this.tasks));
    }
}

export default new TodoObserver();

