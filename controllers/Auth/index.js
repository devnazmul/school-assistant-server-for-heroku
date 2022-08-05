const bcrypt = require('bcrypt');
const User = require('../../models/User');


const registration = async (req, res) => {
    // CHECK IF USER NOT EXIST
    const email = req.body.email;
    const userExist = await User.find({ email });

    if (userExist.length === 0) {

        bcrypt.hash(
            req.body.password,
            10,
            async (err, hash) => {
                if (err) {
                    throw err;
                } else {
                    await User.create({
                        full_name: req.body.fullName,
                        username: req.body.username,
                        email: req.body.email,
                        profile_pic_url: (req.body?.profilePicUrl ? req.body.profilePicUrl : 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg'),
                        password: hash
                    });
                    console.log('success!');
                    res.send('success!');
                }
            })
    } else {
        // ######################################
        // REMOVE BACKGROUND OF A PROFILE PICTURE 
        // ######################################

        // const { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } = require("remove.bg");

        //         const url = "https://engineering.unl.edu/images/staff/Kayla-Person.jpg";
        //         const outputFile = `${__dirname}\\out\\img-removed-from-file.png`;
                
        //         removeBackgroundFromImageUrl({
        //           url,
        //           apiKey: process.env.REMOVE_BG_API_KEY,
        //           size: "regular",
        //           type: "person",
        //           outputFile
        //         }).then((RemoveBgResult) => {
        //          console.log(`File saved to ${outputFile}`);
        //           const base64img = RemoveBgResult.base64img;
        //         }).catch((RemoveBgError) => {
        //          console.log(JSON.stringify(RemoveBgError));
        //         });

        res.json({ message: 'user already exist with this email account' });
    }

}

const login = async (req, res) => {
    const existedUser = await User.find({ email:req.body.email });
    const DBuserEmail = existedUser[0].email;
    const hash = existedUser[0].password;
     if (DBuserEmail === req.body.email) {
        bcrypt.compare(req.body.password, hash, function (err, result) {
       if(result){
            res.send({
                status:"success",
                data:{
                    message:"login successed!"
                }
            })
        
       }else{
        res.send({
            status:"failed",
            data:{
                message:"login unsuccessed!"
            }
        })
    
       }
    });
}
}


module.exports = {
    registration,
    login
};