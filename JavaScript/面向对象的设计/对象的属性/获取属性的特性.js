let a = {}
Object.defineProperties(a, {
    _year : {
        value : 2004
    },

    edition : {
        value : 1
    },

    year : {
        get : function () {
            return this._year
        },

        set : function (newValue) {
            if ( newValue > 2004) {
                this._year = newValue
                this.edition += newValue - 2004
            }
        }
    }
})

let b = Object.getOwnPropertyDescriptor(a, '_year')
console.log(b)