"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostController_1 = __importDefault(require("../controllers/PostController"));
var routes = express_1.Router();
var postController = new PostController_1.default();
routes.get('/posts', postController.index);
exports.default = routes;
