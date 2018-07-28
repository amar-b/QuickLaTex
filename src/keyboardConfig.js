var symbols = require('./symbolsMap.js');
module.exports = {
    'greeksym': {
        isImg: false,
        items: symbols.lowerCaseSym(),
        minWidth: 50,
    },
    'greeksymCap': {
        isImg: false,
        items: symbols.capitalSym(),
        minWidth: 50,
    },
    'operator': {
        isImg: true,
        items: symbols.operators(),
        minWidth: 50,
    },
    'diacritic': {
        isImg: true,
        items: symbols.diacritics(),
        minWidth: 50,
    },
    'misc': {
        isImg: false,
        items: symbols.miscs(),
        minWidth: 50,
    },

};
