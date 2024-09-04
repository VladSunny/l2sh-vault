module.exports = async function insertPresentation(baseName, start = 0, end = 12) {
    let result = '';
    for (let i = start; i <= end; i++) {
        result += `![[${baseName}${i}.jpg]]\n`;
    }
    return result;
};
