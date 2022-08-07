const test = (req,res)=>{
    res.send('test user controller.');
}
const all = (req,res)=>{
    res.send('all user controller.');
}
const create = (req,res)=>{
    res.send('create user controller.');
}
const find = (req,res)=>{
    res.send('find user controller.');
}
const update = (req,res)=>{
    res.send('update user controller.');
}
const remove = (req,res)=>{
    res.send('remove user controller.');
}

module.exports = {
    test,
    all,
    create,
    find,
    update,
    remove,

};