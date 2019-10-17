var tin_nhan = 'toi dmun noi la fuck u to fuck lolmy fuckthlolo'
for (var i = 0; i < tin_nhan.length; i++) {
    console.log(tin_nhan[i])
}


console.log(tin_nhan);
var ds_loc = ['fuck', 'dm', 'lol']
for (var i = 0; i < ds_loc.length; i++) {
    tin_nhan = tin_nhan.replace(new RegExp(ds_loc[i], 'g'), doiDauSao(ds_loc[i]))
}
console.log(tin_nhan);
console.log(doiDauSao(''));

function doiDauSao(str) {
    const doDai = str.length;
    if (doDai == 0) {
        return ''
    }
    var kq = '*'
    for(var i = 2; i <= doDai; i++) {
        kq = kq + '*'
    }
    return kq
}