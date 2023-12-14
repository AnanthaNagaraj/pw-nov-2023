"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Post
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.render = function () {
        console.log("Rendering Post");
    };
    Post.prototype.handleEvent = function () {
        console.log("Handling Post event");
    };
    Post.prototype.sharePost = function () {
        console.log('Sharing the Post..');
    };
    return Post;
}());
// Comment
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.sharePost = function () {
        console.log('Commenting on Shared Post..');
    };
    Comment.prototype.render = function () {
        console.log("Rendering Comment");
    };
    Comment.prototype.handleEvent = function () {
        console.log("Handling Comment event");
    };
    return Comment;
}());
// Like
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.sharePost = function () {
        console.log('Liked the Post..');
    };
    Like.prototype.render = function () {
        console.log("Rendering Like");
    };
    Like.prototype.handleEvent = function () {
        console.log("Handling Like event");
    };
    return Like;
}());
new Post().handleEvent();
new Post().render();
new Post().sharePost();
new Comment().handleEvent();
new Comment().render();
new Comment().sharePost();
new Like().handleEvent();
new Like().render();
new Like().sharePost();
