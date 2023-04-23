const URL = require("url").URL;

validURL = (req, res, next)=>{
    const url = req.body.linkaddress;
    if(!url){
        return res.status(401).send({error: "Link Not Found!"})
    }
    try {
        new URL(url);
        console.log(url);
        next();
      } catch (err) {
        return res.status(401).send({error: "Link Validation Error!"})
      }
}

module.exports = validURL