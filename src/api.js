import data from "./server"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function getVans(paramsVanId) {
    // throw {
    //     message: "There was an error fetching the data"
    // }
    await sleep(1000)

    let vansData

    if (paramsVanId) {
        data.map(van => {
            if (van.id === paramsVanId) {
                vansData = van
            }
        })
    } else {
        vansData = data
    }

    return vansData
}

export async function loginUser({ email, password}) {
    if (email === "b@b.com" && password === "p123") {
        return {
            user: {
                id: 123,
                email,
                password,
                name: "Bob"
            },
            token: "Enjoy your pizza, here's your tokens."
        }
    }
    throw {
        message: "Couldn't log the user in"
    }
}