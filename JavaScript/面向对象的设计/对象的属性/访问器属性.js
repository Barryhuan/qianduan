let a = {
    _year : 2004,
    edition : 1
}
// 现在常用的方法
Object.defineProperty(a, 'year', {
    get : function () {
        return this._year
    },

    set : function (newValue) {
        if (newValue > 2004) {
            this._year = newValue
            this.edition += newValue - 2004
        }
    }
})

a.year = 2005
console.log(a.edition)
