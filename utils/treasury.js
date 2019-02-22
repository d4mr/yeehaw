let bank = {};

const treasury = {};

treasury.getUser = function(id) {
    if(bank[id]) return bank[id];
    else return treasury.newUser(id);
}

treasury.newUser = function(id){
    bank[id] = 1000;
    return bank[id];
}

treasury.giveTo = function(amt, sender, receiver){
    if(!bank[sender]) treasury.newUser(sender);
    if(!bank[receiver]) treasury.newUser(receicer);
    
    bank[sender] -= amt;
    bank[receiver] += amt;
}

module.exports = treasury