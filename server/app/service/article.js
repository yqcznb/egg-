const Service = require('egg').Service;

class ArticleService extends Service {
    async create(params) {
        const { app } = this;
        try{
            const result = await app.mysql.inset('article',params);
            return result;
        }catch(err){
            console.log(err)
            return null
        }
    }
}

module.exports = ArticleService;