import plugin from '../plugin';

const targets = ['ie 8', 'ie 7', 'ie 6'];

export default plugin(targets, ['decl'], function (decl) {
    let v = decl.value;
    if (v && v.length > 2 && v.indexOf('\\9') === v.length - 2) {
        this.push(decl, {
            identifier: 'value',
            hack: v,
        });
    }
});
