const test = (req,res)=>{
    res.send('test branch controller.');
}
const all = (req,res)=>{
    res.send('all branch controller.');
}
const create = (req,res)=>{
    res.send('create branch controller.');
}
const find = (req,res)=>{
    res.send('find branch controller.');
}
const update = (req,res)=>{
    res.send('update branch controller.');
}
const remove = (req,res)=>{
    res.send('remove branch controller.');
}

module.exports = {
    test,
    all,
    create,
    find,
    update,
    remove,

};