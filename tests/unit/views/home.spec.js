import { shallowMount } from "@vue/test-utils";
import HomePage from "@/views/HomePage";
import TodoList from "@/components/TodoList";

describe("Home Page", () => {
  test("It has a good text in the beginning of page", () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.text()).toContain("Good");
  });

  test("It render todo list component", () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.contains(TodoList)).toBe(true);
  });
});
