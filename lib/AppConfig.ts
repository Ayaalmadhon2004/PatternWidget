/* ================================
   Singleton Pattern Comparison
   ================================

   BEFORE (Simple Singleton):
   ---------------------------
   - single instance ensured
   - no lazy initialization
   - no consideration for multithreading or performance
   - instance created immediately, even if never used

   class AppConfigBefore {
     private static instance: AppConfigBefore;
     public theme: 'light' | 'dark' = 'light';
     private constructor() {}

     static getInstance() {
       if (!this.instance) {
         this.instance = new AppConfigBefore();
       }
       return this.instance;
     }

     toggleTheme() {
       this.theme = this.theme === 'light' ? 'dark' : 'light';
     }
   }

   AFTER (Improved Singleton with Performance Tips):
   -------------------------------------------------
   - Lazy initialization: instance created only when needed
   - Optionally, thread-safe / lock-free logic can be added
   - Console logs added for learning/debugging
   - Object pooling suggestion included (comment)
*/

class AppConfig {
  private static instance: AppConfig | null = null;
  public theme: 'light' | 'dark' = 'light';

  /**
   * ⚠️ Singleton Pattern Performance Considerations:
   * 1. Lazy Initialization: instance is created only when needed
   * 2. Lock-free / thread-safe initialization can be added in multithreaded environments
   * 3. Object Pooling: if multiple instances occasionally needed, use pool instead of breaking singleton rules
   */
  private constructor() {
    console.log('AppConfig constructor called (Singleton instance created)');
  }

  // Lazy initialization
  static getInstance(): AppConfig {
    if (!this.instance) {
      this.instance = new AppConfig();
    }
    return this.instance;
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    console.log(`Theme changed to: ${this.theme}`);
  }
}

// Example usage:
// const config = AppConfig.getInstance();
// config.toggleTheme();

export default AppConfig;
