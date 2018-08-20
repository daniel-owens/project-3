import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import Nav from "./Nav";
import LessonPlans from "./LessonPlans";

var destination = document.querySelector("#root");

ReactDOM.render(
	<div>
			<Nav />
			<TodoList />	
			<LessonPlans />
	</div>,
	destination
)




