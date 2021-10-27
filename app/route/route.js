module.exports = function (app) {
    require('./route/user')(app);
};


/**
 * @api {get} /api Request query all City
 * @apiDescription This api will return all the city in the list!
 * @apiName GetCity
 * @apiGroup City
 *
 * @apiSuccess {int} ID id of the City.
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
 * @apiError (404) CityNotFound List of City is Empty!
 * @apiErrorExample Error-Response:
 *     The Cities list is empty!
 *
 * @apiSampleRequest https://assignment3api.herokuapp.com/api
 * 
 */



/**
 @api {get} /api/:id Request query specific City
 * @apiDescription This api will return the city with id input in!
 * @apiName GetSpecificCity
 * @apiGroup City
 *
 * @apiSuccess {int} ID id of the City.
 * @apiSuccess {String} Name name  of the city.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    [
            {id:1, name:"Ben Tre"},
        ]
 * @apiError (404) CityNotFound There are no city with the id!
 * @apiErrorExample Error-Response:
 *     The city not found!
 * @apiQuery {int} [id] The id of the specific city
 * @apiSampleRequest https://assignment3api.herokuapp.com/api/:id
 */


/**
 * @api {post} /api/ Add a new City
 * @apiDescription This api will add a new city to the City List!
 * @apiName AddNewCity
 * @apiGroup City
 *
 * @apiSuccess {int} ID id of the City.
 * @apiSuccess {String} Name name  of the city.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
            {id:1, name:"Ben Tre"},
            {id:2 ,name:"Ho Chi Minh"},
            {id:3 ,name:"Da Nang"},
            {id:4 ,name:"Ha Noi"},
            {id:5 ,name:"Tien Giang"},
            {id:6 ,name:"Hai Phong"}
        ]
 * @apiError (404) TheCityExist The new city is exist!
 * @apiError (404) TheNameToShort The <code>name</code> of the City is too short or wrong input!
 * @apiErrorExample Error-Response:
 *     The city name is wrong or exist!
 * @apiBody {string} [name] The name of the new city
 * @apiSampleRequest https://assignment3api.herokuapp.com/api
 */


/**
 * @api {put} /api/ Update the City Name of the ID
 * @apiDescription This api will update the name of the City with ID input!
 * @apiName UpdateCity
 * @apiGroup City
 *
 * @apiSuccess {int} ID id of the City.
 * @apiSuccess {String} Name name  of the city.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
            {id:1, name:"Nam Dinh"},
            {id:2 ,name:"Ho Chi Minh"},
            {id:3 ,name:"Da Nang"},
            {id:4 ,name:"Ha Noi"},
            {id:5 ,name:"Tien Giang"},
            {id:6 ,name:"Hai Phong"}
        ]
 * @apiError (404) Theidunvalid The id to update doest not exist!
 * @apiError (404) TheNewNameToShort The <code>name</code> of the City is too short or wrong input!
 * @apiError (404) TheNewNameIsExist The <code>name</code> of the New City is exist in the list!
 * @apiErrorExample Error-Response:
 *     Can't not found the city ID or the name already exist!
 * @apiBody {int} [id] The ID of the new city
 * @apiBody {string} [name] The name of the new city
 * @apiSampleRequest https://assignment3api.herokuapp.com/api
 */


/**
 * @api {delete} /api/ Delete the City with the name input
 * @apiDescription This api will delete the city of the name input.
 * @apiName DeleteCity
 * @apiGroup City
 *
 * @apiSuccess {int} ID id of the City.
 * @apiSuccess {String} Name name  of the city.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
            {id:1, name:"Nam Dinh"},
            {id:2 ,name:"Ho Chi Minh"},
            {id:3 ,name:"Da Nang"},
            {id:4 ,name:"Tien Giang"},
            {id:5 ,name:"Hai Phong"}
        ]
 * @apiError (404) CannotFindTheCity The name of the city to delete does not exist.
 * @apiErrorExample Error-Response:
 *    No exist the city to delete!
 * @apiBody {string} [name] The name of the new city
 * @apiSampleRequest https://assignment3api.herokuapp.com/api
 */