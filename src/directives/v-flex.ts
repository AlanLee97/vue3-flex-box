import { DirectiveBinding } from 'vue';
import { transformCamelToDash } from '../utils';
import './style.scss';

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.setAttribute('class', 'flex-box');
    const {modifiers} = binding;
    let currentClass = el.getAttribute('class') ?? '';
    for (const key in modifiers) {
      currentClass += (' ' + key);
    }
    el.setAttribute('class', transformCamelToDash(currentClass));
  }
}

