import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo";

describe("Home Page", () => {
  test("It render correct value from props", () => {
    const propsData = {
      todo: { id: 1 }
    };
    const wrapper = shallowMount(Todo, {
      propsData
    });
    expect(wrapper.text()).toContain(propsData.todo.id);
  });
});
