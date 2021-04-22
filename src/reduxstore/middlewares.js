export function Logger(store){
    return function(next){
        return function(action){
            console.log('Before Action', store.getState())

            var result = next(action)

            console.log('After action', store.getState())
            return result
        }
    }
}