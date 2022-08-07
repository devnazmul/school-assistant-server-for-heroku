const test = (req,res)=>{
    res.send('test classes controller.');
}
const all = (req,res)=>{
    res.send('all classes controller.');
}
const create = (req,res)=>{
    res.send('create classes controller.');
}
const find = (req,res)=>{
    res.send('find classes controller.');
}
const update = (req,res)=>{
    res.send('update classes controller.');
}
const remove = (req,res)=>{
    res.send('remove classes controller.');
}

module.exports = {
    test,
    all,
    create,
    find,
    update,
    remove,

};