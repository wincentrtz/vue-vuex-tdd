import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList";
import Todo from "@/components/Todo";

describe("Todo List Component", () => {
  test("Todo list will render specific number of todos ", () => {
    const todos = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const wrapper = shallowMount(TodoList, {
      data: () => {
        return {
          todos
        };
      }
    });
    const renderedTodos = wrapper.findAll(Todo);
    expect(renderedTodos).toHaveLength(todos.length);
    renderedTodos.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().todo).toBe(todos[i]);
    });
  });
});
