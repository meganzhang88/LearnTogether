"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = __importDefault(require("firebase"));
// Set the configuration for your app
// TODO: Replace with your project's config object
exports.config = firebase_1.default.initializeApp({
    apiKey: "AIzaSyA5Sryf_aHyBIjUPZlkKVDV2BNGH1fKOsU",
    authDomain: "learntogether-1a02d.firebaseapp.com",
    databaseURL: "https://learntogether-1a02d.firebaseio.com",
    projectId: "learntogether-1a02d",
    storageBucket: "learntogether-1a02d.appspot.com",
    messagingSenderId: "984765198855"
});
