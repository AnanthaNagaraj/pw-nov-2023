import { SocialMediaFeature } from "./SocialMediaFeature";
import { UIComponent } from "./UIComponentLibrary";

//Post
class Post implements SocialMediaFeature,UIComponent{
    render() {
        console.log("Rendering Post");
       
    }
    
    handleEvent() {
        console.log("Handling Post event");
    }

    sharePost() {
        console.log('Sharing the Post..');
        
    }
    
}
// Comment
class Comment implements SocialMediaFeature,UIComponent{
    sharePost() {
        console.log('Commenting on Shared Post..');
        
    }
    
    render() {
        console.log("Rendering Comment");
       
    }
    
    handleEvent() {
        console.log("Handling Comment event");
    }
}

// Like
class Like implements SocialMediaFeature,UIComponent{
    sharePost() {
        console.log('Liked the Post..');
        
    }
    
    render() {
        console.log("Rendering Like");
       
    }
    
    handleEvent() {
        console.log("Handling Like event");
    }
}



new Post().handleEvent();
new Post().render();
new Post().sharePost();

new Comment().handleEvent();
new Comment().render();
new Comment().sharePost();

new Like().handleEvent();
new Like().render();
new Like().sharePost();