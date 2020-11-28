;!function() {
    window.myLib = {
        remove: function(arr, index) {
            return arr.splice(index, 1);
        },
        pluck: function(arr, name) {
            let result = [];
            for(let i = 0; i < arr.length; i++) {
                if(name in arr[i]) {
                    result(arr[i][name]);
                }
                return 
            }
        }
    }

}();