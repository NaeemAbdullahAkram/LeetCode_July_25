
var removeSubfolders = function(folder) {
    folder.sort();
    let arr = [];
    let hash = {};
    for (let path of folder) {
        let temp = "";
        let bool = true;

        for (let i=0; i<path.length; i++) {
            if(path[i]=='/') {
                if (temp in hash) {
                    bool = false;
                }
            }
            temp += path[i];
        }

        if (bool) {
            hash[temp] = true;
            arr.push(temp);
        }
    }
    return arr;
};