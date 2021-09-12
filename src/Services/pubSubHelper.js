import { PubSub } from 'aws-amplify'
import { AWSAppSyncProvider } from "@aws-amplify/pubsub/lib/Providers";

let pubsubInstance = null

const subscribe = (userId, userEmail) => {
    debugger
    try {
        unsubscribe()
        pubsubInstance = PubSub.subscribe([`${userId}_orders`, `${userEmail}_orders`]).subscribe({
            next: data => {
                debugger
            },
            error: error => {
                debugger
            },
            close: () => {
                debugger
            },
        })
    } catch (e) {
        debugger
        console.log(e.stack)
    }
}

const unsubscribe = () => {
    if (pubsubInstance) {
        pubsubInstance.unsubscribe()
        pubsubInstance = null
    }
}

export default {
    subscribe,
    unsubscribe
}