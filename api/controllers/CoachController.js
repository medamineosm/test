/**
 * CoachController
 *
 * @description :: Server-side logic for managing coaches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getCoachsUnderFiveKm: function (req, res) {
	    //return res.send('your position :' + req.param('lat') + ', ' + req.param('long'));
			return CoachService.findAllCoachUnderRange();
		}
};
