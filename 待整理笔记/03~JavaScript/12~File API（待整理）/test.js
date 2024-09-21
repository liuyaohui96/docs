let bytes1 = 1024 * 1024 * 24;
let bytes2 = 50;

function formatBytes(bytes) {
  let bytesUnits = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let rst = bytes + ' bytes';
  for (let temp = bytes / 1024, unit = 0; temp > 1; temp /= 1024, unit++) {
    rst = `${temp.toFixed(3)} ${bytesUnits[unit]} (${bytes} bytes)`;
  }
  return rst;
}

console.log(formatBytes(bytes1));
console.log(formatBytes(bytes2));
