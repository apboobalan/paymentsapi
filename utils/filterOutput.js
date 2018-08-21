const filterCharges = (charges) => {
    let newData = [];
    charges.forEach(charge => {
        delete charge._doc._id;
        delete charge._doc.id;
        delete charge._doc.__v;
        newData.push(charge);
    });
    return newData;
};

module.exports = {
    filterCharges
}