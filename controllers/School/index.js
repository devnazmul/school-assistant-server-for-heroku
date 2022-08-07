const test = (req,res)=>{
    res.send('test school controller.');
}
const all = (req,res)=>{
    res.send('all school controller.');
}
const create = (req,res)=>{
    res.send('create school controller.');
}
const find = (req,res)=>{
    res.send('find school controller.');
}
const update = (req,res)=>{
    res.send('update school controller.');
}
const remove = (req,res)=>{
    res.send('remove school controller.');
}

module.exports = {
    test,
    all,
    create,
    find,
    update,
    remove,

};