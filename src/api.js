import data from "./server"

export default function getVans(paramsVanId) {
    // throw {
    //     message: "There was an error fetching the data"
    // }
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