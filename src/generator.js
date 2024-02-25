import { badmouthes, snail } from "./data.js";

const pairs = badmouthes.reduce(
    (xs, bm) => [
        ...xs,
        ...snail.map((sn) => `${bm}${sn}`)
    ],
    []
)

export function generate() {
    const index = Math.floor(
        Math.random() * (pairs.length - 1)
    )

    return pairs[index]
}
