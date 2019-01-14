const state = {
    cars : getCars()
}
function getCars(){
    return JSON.parse(localStorage.cars ? localStorage.cars : '[]')
}
export default state
