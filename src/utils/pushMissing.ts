
type arg<T> = T[];

const pushMissing = <T>(target:arg<T>, data:arg<T>):arg<T> => {
    const copyTarget = [...target];
    const newData = data.filter(item => !target.includes(item));
    copyTarget.push(...newData);
    return copyTarget;
}

export default pushMissing;