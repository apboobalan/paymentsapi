class NoMethodFoundError extends Error {
    constructor(params){
        super(params)
        this.message = "Method not found in the implementation."
        this.type = "NoMethodFound"
    }
}
module.exports = NoMethodFoundError;