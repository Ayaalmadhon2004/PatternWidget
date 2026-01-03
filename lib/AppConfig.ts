class AppConfig{
    private static instance:AppConfig; 
    public theme:"light"|"dark"="light";
    private constructor(){} 
    static getInstance(){
        if(!this.instance){
            this.instance=new AppConfig();
        }
        return this.instance;
    }
    toggleTheme(){
        this.theme=this.theme==='light'?'dark':'light';
    }
}
export default AppConfig;

