// 将驼峰转化为中间连接符
export function transformCamelToDash(str: string = '') {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    if(/[A-Z]/.test(str[i])) {
      res += '-' + str[i].toLocaleLowerCase();
    }
    else {
      res += str[i];
    }
  }
  return res;
}