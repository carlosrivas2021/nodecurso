'use strict'

var buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')
console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes'
);


for (let i = 0; i < buf2.length; i++){
    
    buf2[i] = i + 97
    
}
console.log(
    buf2,
    buf2.toString('ascii')
);
