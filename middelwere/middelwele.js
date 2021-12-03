module.exports = {

    middelwerePutUser : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    middelwereDeleteUser : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    middelwerPutBook : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    },

    middelwereDeleteBook : (req, res, next) => {
        console.log(req.method, req.originalUrl)
        next()
    }
}