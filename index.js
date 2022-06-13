var customerName = 'bob'
const leastFavouriteCustomer = 'some initiall value'
function upperCaseCustomerName() {
    customerName = customerName.toLocaleUpperCase()
}
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = 'billy'
}