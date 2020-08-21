const config = require('../../common/config')();
const cloudinary = require('cloudinary').v2;
const { statisticsTransformer, csvTransformer } = require('./transformers');

class Cloudinary {
    constructor() {
        this.config = config.cloudinary;
        this.cloudinary = cloudinary;
        this.cloudinary.config({
            cloud_name: this.config.cloud,
            api_key: this.config.apiKey,
            api_secret: this.config.apiSecret,
        });
    }

    getData = () => {
        return this.cloudinary.api.resources({ resource_type: 'image' }, (err, result) => {
            if (err) {
                console.log('[CLOUDINARY][GET-DATA] Failed to retrieve image data', {err});
                return;
            }

            if (result.resources && result.resources.length > 0) return result;

            console.log('[CLOUDINARY][GET-DATA] No image data available', {result});
            return;
        });
    }

    getStatistics = async () => {
        const imageData = await this.getData();

        if (imageData) return statisticsTransformer(imageData);
    };

    getExportData = async () => {
        const imageData = await this.getData();

        if (imageData) return csvTransformer(imageData);
    };
}

module.exports = Cloudinary;