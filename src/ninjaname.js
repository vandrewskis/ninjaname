var ninjacode = ['ki', 'lu', 'chi', 'zu', 'ke', 'ru', 'ji', 'to', 'me', 'zi', 'shi', 'no', 'ta', 'chi', 'zu', 'ta', 'ari', 'rin', 'no', 'shi', 'ga', 'mei', 'ku', 'te', 'fu', 'yo'];

function ninjaname(name) {
    var ninjaname = "";

    for (i = 0; i < name.length; i++) {
        var n = name.charCodeAt(i);
        // handle space
        if (n == 32) {
            ninjaname += " ";
        }
        // handle UPPER CASE
        else if (n >= 65 && n < 91) {
            var code = ninjacode[n - 65];
            code = code.charAt(0).toUpperCase() + code.slice(1);
            ninjaname += code;
        }
        // handle lower case
        else if (n >= 97 && n < 123) {
            ninjaname += ninjacode[n - 97];
        }
    }

    return ninjaname;
}