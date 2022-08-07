const test = (req, res) => {
    res.send('test class controller.');
}

const all = (req, res) => {
    res.send('all class controller.');
}
const create = (req,res)=>{
    res.send('create class controller.');
}
const find = (req,res)=>{
    res.send('find class controller.');
}
const update = (req,res)=>{
    res.send('update class controller.');
}
const remove = (req,res)=>{
    res.send('remove class controller.');
}

module.exports = {
    test,
    create,
    all,
    find,
    update,
    remove
};