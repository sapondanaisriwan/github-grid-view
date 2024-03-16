export function removeEleById(id) {
  const ele = document.getElementById('khun-ma-' + id);
  ele && ele.remove();
}
