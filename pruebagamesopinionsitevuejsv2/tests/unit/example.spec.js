/* import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
}) */

import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("Testeo a NavBar.vue", () => {
  const wrapper = shallowMount(NavBar, {});
  it("Comprobando que existe una etiqueta i", () => {
    const etiquetai = wrapper.find("i");
    console.log(etiquetai);
    expect(etiquetai.exists()).toBe(true);
  });
});
