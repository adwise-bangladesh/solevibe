

export const idEncryption = (id) => {
    const firstLayer = (id+4)*5
    const secondLayer = firstLayer.toString(8)
    return secondLayer;
}

export const idDecryption = (id) => {
    const firstLayer = parseInt(id, 8)
    const secondLayer = (firstLayer/5)-4
    return secondLayer;
}