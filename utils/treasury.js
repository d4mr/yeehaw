let bank = {};

const treasury;

treasury.getUser = function(id) {
    if(bank[id]) return bank[id];
    else return newUser(id);
}

treasury.newUser = function(id){
    bank[id] = 1000;
    return bank[id];
}

treasury.giveTo = function(amt, sender, receiver){
    bank[sender] -= amt;
    bank[receiver] += amt;
}

module.exports(treasury)