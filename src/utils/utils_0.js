export function get_size_image(i) {
  if (i % 5 === 0) {
    return 'big';
  } else if (i % 6 === 0) {
    return 'wide';
  }
}
