type Subscriber = (tasks: string[]) => void;

class TodoObserver {
  private subscribers: Set<Subscriber> = new Set(); // Use Set to avoid duplicates
  private tasks: string[] = [];

  /**
   * ⚠️ Performance & Usage Considerations:
   * 1. Subscribers are stored in a Set to avoid duplicates and easy removal.
   * 2. Notifications are asynchronous to prevent blocking the main thread.
   * 3. Method unsubscribe allows removing observers to prevent memory leaks.
   */

  // Add a new subscriber
  subscribe(fn: Subscriber) {
    this.subscribers.add(fn);
  }

  // Remove a subscriber
  unsubscribe(fn: Subscriber) {
    this.subscribers.delete(fn);
  }

  // Add a new task and notify all subscribers
  addTask(task: string) {
    this.tasks.push(task);
    this.notify();
  }

  // Notify all subscribers asynchronously to avoid blocking
  private notify() {
    // Using microtask queue to make notifications async
    this.subscribers.forEach((s) => {
      Promise.resolve().then(() => s(this.tasks));
    });
  }

  // Optional: get current tasks without subscribing
  getTasks() {
    return [...this.tasks];
  }
}

export default new TodoObserver();

/* ================================
   Observer Pattern Comparison
   ================================

   BEFORE (Previous Implementation):
   ---------------------------------
   - subscribers stored in Array
   - no way to remove unused subscribers
   - notifications synchronous (blocking)
   - possible duplicates in subscribers
   - potential memory leaks with many observers

   type subscriber = (tasks: string[]) => void;

   class TodoObserverBefore {
     private subscribers: subscriber[] = [];
     private tasks: string[] = [];

     subscribe(fn: subscriber) {
       this.subscribers.push(fn);
     }

     addTask(task: string) {
       this.tasks.push(task);
       this.notify();
     }

     private notify() {
       this.subscribers.forEach((s) => s(this.tasks));
     }
   }

   AFTER (Improved Implementation):
   ---------------------------------
   - subscribers stored in Set to avoid duplicates
   - unsubscribe method to remove unused observers
   - notifications are asynchronous (non-blocking)
   - getTasks method to access current tasks without subscribing
   - safer and more performant

   import type { Subscriber } from './types'; // optional type

   class TodoObserverAfter {
     private subscribers: Set<Subscriber> = new Set();
     private tasks: string[] = [];

     subscribe(fn: Subscriber) {
       this.subscribers.add(fn);
     }

     unsubscribe(fn: Subscriber) {
       this.subscribers.delete(fn);
     }

     addTask(task: string) {
       this.tasks.push(task);
       this.notify();
     }

     private notify() {
       // Notify asynchronously to avoid blocking
       this.subscribers.forEach((s) => {
         Promise.resolve().then(() => s(this.tasks));
       });
     }

     getTasks() {
       return [...this.tasks];
     }
   }

   export default new TodoObserverAfter();
*/

