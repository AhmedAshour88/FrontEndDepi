export function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

export function cloneObject(obj) {
    return { ...obj };
}
