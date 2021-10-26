module.exports = function (app) {
    require('./route/user')(app);
};


/**
 * @api {get} /api Request all City
 * @apiName GetCity
 * @apiGroup City
 *
 * @apiSuccess {String} ID id of the City.
 * @apiSuccess {String} Name name  of the city.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
            {id:1, name:"Ben Tre"}, 
            {id:2 ,name:"Ho Chi Minh"},
            {id:3 ,name:"Da Nang"},
            {id:4 ,name:"Ha Noi"},
            {id:5 ,name:"Tien Giang"}
        ]
 *T
 * @apiSampleRequest http://localhost:3000/api
 */
