
/**
 * 随机生成n位整数,默认是6位
 * @param {*} count 
 */
export function mathRand(count = 6) {
  let num = "", i = 0;
  for (; i < count; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}


/**
 * 获取参数对象
 * @param {*} locationSearch 
 */
export function getUrlParams(locationSearch) {
  var params = {};
  var search = locationSearch;
  search = /\?/.test(search) && search.split("?")[1];// \? 表示一个 ? 字符
  var searchs = /\&/.test(search) ? search.split("&") : [search];
  for (var i = 0; i < searchs.length; i++) {
    if (/\=/.test(searchs[i])) {
      var item = searchs[i].split("=");
      params[item[0]] = item[1];
    };
  };
  return params;
};