 export default function createLocatrioDiamond(arrLine: number[], allLineHieghrt: number): number[] {
    const arrLocation = []
    let valueLocation = 0;

    arrLine.forEach((value, index) => {
        arrLocation.push(valueLocation);
        valueLocation = valueLocation + 46 + arrLine[index];
    })
    arrLocation.push(valueLocation, allLineHieghrt - 60)
    return arrLocation
}