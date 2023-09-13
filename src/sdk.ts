import { SUPPORTED_PRODUCTS, HORRORCLOUD_CONTAINER_ID, HORRORCLOUD_CONTAINER_STYLE } from './constants.js';
import { isObject } from './helper.js';

export interface IPlayOption {
  containerId ?:string,
  style ?:Record<string, any>,
}

export class HorrorCloudSDK {

  partnerCode :string;

  constructor(partnerCode :string) {
    if (!partnerCode) throw new Error("'partnerCode' param is required");
    this.partnerCode = partnerCode;
  }

  play = function (productId :string, options :IPlayOption = {}) {
    options = isObject(options) ? options : {};
    let { containerId, style } = options;
    style = isObject(style) ? style : HORRORCLOUD_CONTAINER_STYLE;
    const product = SUPPORTED_PRODUCTS.find(p => p.id == productId);
    if (!product) throw new Error(`Unsupported product ${productId}`);
    const iframeUrl = product.homepage + "/widget?partner=" + this.partnerCode;
    containerId = (typeof containerId == 'string' && containerId && document.getElementById(containerId)) ? containerId : HORRORCLOUD_CONTAINER_ID;
    let htmlNode = document.getElementById(containerId);
    if (!htmlNode) {
      htmlNode = document.createElement('div');
      htmlNode.id = containerId
      document.body.appendChild(htmlNode);
    }
    const styles :string[] = []; Object.keys(style as object).forEach(k => styles.push(`${k}: ${(style as object)[k]}`));
    htmlNode.innerHTML = `<iframe allowFullScreen src="${iframeUrl}" style="${styles.join("; ")}"></iframe>`;
  }

}

