# FlexBox Component For Vue3

## 简介 | Description

基于vue3开发的FlexBox组件。

A flex-box component developed based on vue3.

## 使用 | Usage

**安装 | Install**

```bash
npm i @alanlee97/vue3-flex-box
```

**引入组件 | Import Component**

在需要使用flex-box组件的地方引入。

In the place where you need to use the flex - box component into it.

```typescript
import FlexBox from '@alanlee97/vue3-flex-box';
```

或者全局引入，在main.ts中引入组件。

Or youcan globally import flex-box, import it in main.ts.

```typescript
import { createApp } from 'vue'
import FlexBox from '@alanlee97/vue3-flex-box';
import '@alanlee97/vue3-flex-box/dist/style.css';

const app = createApp(App);
app.component('flex-box', FlexBox);
app.mount('#app');
```



**引入样式 | Import Style**

在main.ts中引入样式。

Import style file in main.ts.

```typescript
import '@alanlee97/vue3-flex-box/dist/style.css';
```



**验证是否生效 | Validation**

```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import FlexBox from '@alanlee97/vue3-flex-box';
</script>

<template>
  <FlexBox space-between>
    <div>1</div>
    <div>2</div>
  </FlexBox>
</template>
```

可以看到效果，组件生效了。

You can see that the component works.

![img](https://cdn.nlark.com/yuque/0/2022/png/743297/1641115019075-3b20045c-ddc4-406b-9c79-e7e640f238b9.png)