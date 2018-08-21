const charge = require('./chargeRoutes');
const payment = require('./paymentRoutes');
module.exports = (server) => {
    charge(server);
    payment(server);
};

// var fs = require('fs');
// module.exports = (server) => {
//     fs.readdirSync('./routes/').forEach(function (file) {
//         if(file.substr(-3) == '.js' && file !=="index.js") {
//             require('./' + file)(server);
//         }
//       });
// };
