import { DirectiveBinding } from 'vue';
import { transformCamelToDash } from '../utils';
import './style.scss';

const handleAliasProps = (alias: string) => {
  let className = alias;
  switch(className) {
    case 'wrap':
      className = 'flex-wrap';
      break;
    case 'direction-r':
    case 'horizontal':
      className = 'direction-row';
      break;
    case 'direction-c':
    case 'vertical':
      className = 'direction-column';
      break;
  }
  if(['between', 'around', 'evenly'].includes(className)) {
    className = `space-${className}`
  }
  return className;
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.setAttribute('class', 'flex-box');
    const {modifiers} = binding;
    let currentClass = el.getAttribute('class') ?? '';
    for (const key in modifiers) {
      currentClass += (' ' + handleAliasProps(key));
    }
    el.setAttribute('class', transformCamelToDash(currentClass));
  }
}

