<script setup lang="ts">
import { ref, computed } from 'vue'

const props= defineProps<{ 
  height?: string | number
  width?: string | number
  centerH?: boolean
  centerV?: boolean
  centerHV?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  directionRow?: boolean
  directionColumn?: boolean
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  itemAlignStart?: boolean
  itemAlignEnd?: boolean
  flexNum?: number
 }>()

const className = ref('flex-box');
const style = ref('');

const {
  height,
  width,
  centerH,
  centerV,
  centerHV,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  directionRow,
  directionColumn,
  direction,
  itemAlignStart,
  itemAlignEnd,
  flexNum,
} = props;


className.value += centerH ? ' center-h' : ''
className.value += centerV ? ' center-v' : ''
className.value += centerHV ? ' center-h-v' : ''
className.value += spaceBetween ? ' space-between' : ''
className.value += spaceAround ? ' space-around' : ''
className.value += spaceEvenly ? ' space-evenly' : ''
className.value += directionRow ? ' direction-row' : ''
className.value += directionColumn ? ' direction-column' : ''
className.value += itemAlignStart ? ' item-align-start' : ''
className.value += itemAlignEnd ? ' item-align-end' : ''


style.value = `
width: ${width ? width + 'px' : ''}; 
height: ${height ? height + 'px' : ''}; 
${flexNum ? 'flex: ' + flexNum + ';' : ''}
${direction ? 'flex-direction: ' + direction + ';' : ''}
`
</script>

<template>
  <div :class="className" :style="style">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.flex-box {
  display: flex;
}
.center-v {
  display: flex;
  align-items: center;
}

.center-h {
  display: flex;
  justify-content: center;
}

.center-h-v {
  display: flex;
  align-items: center;
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.space-evenly {
  justify-content: space-evenly;
}

.direction-column {
  flex-direction: column;
}

.direction-column-reverse {
  flex-direction: column-reverse;
}

.direction-row {
  flex-direction: row;
}

.direction-row-reverse {
  flex-direction: row-reverse;
}

.item-align-start {
  align-items: flex-start;
}

.item-align-end {
  align-items: flex-end;
}

</style>
