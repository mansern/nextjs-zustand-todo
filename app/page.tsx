"use client";
import useTodoStore from "@/util/useTodoStore";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Todo List made from Zustand
        </h1>
        <Image
          src="https://images.unsplash.com/photo-1714244322811-f1387dc93909?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
          alt="Beautiful Image"
          width={800}
          height={400}
          className="mb-8 rounded-lg shadow-md"
        />{" "}
        <div className="mt-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 bg-white text-gray-900"
            placeholder="Enter a todo"
          />
        </div>
        <div className="mt-6">
          <button
            onClick={handleAddTodo}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Todo
          </button>
        </div>
        <ul className="mt-8 divide-y divide-gray-200">
          {todos.map((todo) => (
            <li key={todo.id} className="py-4">
              <div className="flex items-center justify-between">
                <p
                  className={`text-lg cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-900"
                  }`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </p>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
