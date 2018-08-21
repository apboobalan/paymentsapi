const sendError = (type) => {
const errors = {
'400':{ "message" : "Invalid parameters", "code": 400 },
'404':{ "message" : "Resource doesn't exist", "code": 404 },
'409':{ "message" : "Data conflict", "code": 409 },
'500':{ "message" : "Internal server error", "code": 500 }
};
return errors[type];
};

module.exports = sendError;