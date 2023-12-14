// Compile interface class first
import { UIComponent } from "./UIComponentLibrary";

class Button implements UIComponent{
    render():void {
        console.log("Rendering Button");
    }
    handleEvent():void {
        console.log("Handling Button event");
    }
}
//TextField
class TextField implements UIComponent{
    render() {
        console.log("Rendering TextField");
    }
    handleEvent() {
        console.log("Handling TextField event");
    }
    
}

//`Checkbox`    
class Checkbox implements UIComponent{
    render() {
        console.log("Rendering Checkbox");
    }
    handleEvent() {
        console.log("Handling Checkbox event");
    }
    
}

new Button().render();
new Button().handleEvent();

new TextField().render();
new TextField().handleEvent();

new Checkbox().render();
new Checkbox().handleEvent();

