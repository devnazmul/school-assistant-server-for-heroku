const test = (req, res) => {
    res.send('test student controller.');
}

const all = (req, res) => {
    res.send('all student controller.');
}
const create = (req,res)=>{
    res.send('create student controller.');
}
const find = (req,res)=>{
    res.send('find student controller.');
}
const update = (req,res)=>{
    res.send('update student controller.');
}
const remove = (req,res)=>{
    res.send('remove student controller.');
}

module.exports = {
    test,
    create,
    all,
    find,
    update,
    remove
};