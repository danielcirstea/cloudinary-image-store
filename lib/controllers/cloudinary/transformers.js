const { Parser } = require('json2csv');

const csvTransformer = data => {
    const imageData = data.resources;
    const fields = [...Object.keys(imageData[0])];
    const parser = new Parser(fields);
    const result = parser.parse(imageData);

    return result;
}

const statisticsTransformer = data => {
    const imageData = data.resources;
    const result = {};

    result.totalImages = imageData.length;
    result.formats = {};
    result.bytes = [];
    result.smallest = imageData[0].bytes;
    result.biggest = imageData[0].bytes;
    result.biggestPicture = imageData[0].secure_url;
    result.smallestPicture = imageData[0].secure_url;

    imageData.forEach(image => {
        if (result.formats.hasOwnProperty(image.format)) result.formats[image.format] += 1;
        else result.formats[image.format] = 1;

        if (result.biggest < image.bytes)  {
            result.biggestPicture = image.secure_url;
            result.biggest = image.bytes;
        }
        if (result.smallest > image.bytes) {
            result.smallestPicture = image.secure_url;
            result.smallest = image.bytes;
        }

        result.bytes.push(image.bytes);
    });
    result.avgSize = result.bytes.reduce((a, b) => a + b) / result.bytes.length;

    delete result.bytes;
    delete result.smallest;
    delete result.biggest;

    return result;
}

module.exports = {
    statisticsTransformer,
    csvTransformer,
}