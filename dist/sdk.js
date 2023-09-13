import { SUPPORTED_PRODUCTS, HORRORCLOUD_CONTAINER_ID, HORRORCLOUD_CONTAINER_STYLE } from './constants.js';
import { isObject } from './helper.js';
export class HorrorCloudSDK {
    constructor(partnerCode) {
        this.play = function (productId, options = {}) {
            options = isObject(options) ? options : {};
            let { containerId, style } = options;
            style = isObject(style) ? style : HORRORCLOUD_CONTAINER_STYLE;
            const product = SUPPORTED_PRODUCTS.find(p => p.id == productId);
            if (!product)
                throw new Error(`Unsupported product ${productId}`);
            const iframeUrl = product.homepage + "/widget?partner=" + this.partnerCode;
            containerId = (typeof containerId == 'string' && containerId && document.getElementById(containerId)) ? containerId : HORRORCLOUD_CONTAINER_ID;
            let htmlNode = document.getElementById(containerId);
            if (!htmlNode) {
                htmlNode = document.createElement('div');
                htmlNode.id = containerId;
                document.body.appendChild(htmlNode);
            }
            const styles = [];
            Object.keys(style).forEach(k => styles.push(`${k}: ${style[k]}`));
            htmlNode.innerHTML = `<iframe allowFullScreen src="${iframeUrl}" style="${styles.join("; ")}"></iframe>`;
        };
        if (!partnerCode)
            throw new Error("'partnerCode' param is required");
        this.partnerCode = partnerCode;
    }
}
