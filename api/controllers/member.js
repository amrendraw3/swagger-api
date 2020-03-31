'use strict';

module.exports = {
  getPatientWithCarestaff: getPatientWithCarestaff
};

// Get the patient with care staff
function getPatientWithCarestaff(req, res) {
  var patientId = req.swagger.params.patientId.value || null;

  var members = {
    "Id": patientId,
    "First Name": "Amrendra",
    "Last Name": "Singh",
    "Contact_Number": "0123456789",
    "Email": "techdev@w3villa.com"
  }

  res.json({members: members});
}
