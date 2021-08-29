import Immutable from 'seamless-immutable'
// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("asosPersistantState", serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("asosPersistantState")
        if (serialisedState === null) return undefined
        return Immutable(JSON.parse(serialisedState))
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

export default {
    saveToLocalStorage,
    loadFromLocalStorage
}