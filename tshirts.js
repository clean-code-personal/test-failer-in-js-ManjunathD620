module.exports = function(cms) {
    if (cms > 5 && cms < 38) {
        return 'S';
    } else if (cms >= 38 && cms < 42) {
        return 'M';
    } else if(cms >=42 && cms < 100) {
        return 'L';
    }
    else{
        return undefined;
    }
};

