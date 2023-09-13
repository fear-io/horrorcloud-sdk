import { SUPPORTED_PRODUCTS, HORRORCLOUD_CONTAINER_ID, HORRORCLOUD_CONTAINER_STYLE } from './constants';

class HorrorCloudSDK {

  partnerCode = null;

  constructor(partnerCode) {
    if (!partnerCode) throw new Error("'partnerCode' param is required");
    this.partnerCode = partnerCode;
  }

  play = function (productId, options) {
    options = typeof options == 'object' && options ? options : {};
    let { containerId, style } = options;
    style = typeof style == 'object' && style ? style : HORRORCLOUD_CONTAINER_STYLE;
    if (!SUPPORTED_PRODUCTS.map(p => p.id).includes(productId)) throw new Error(`Unsupported product ${productId}`);
    const product = SUPPORTED_PRODUCTS.find(p => p.id == productId);
    const iframeUrl = product.homepage + "/widget?partner=" + this.partnerCode;
    containerId = (typeof containerId == 'string' && containerId && document.getElementById(containerId)) ? containerId : HORRORCLOUD_CONTAINER_ID;
    let htmlNode = document.getElementById(containerId);
    if (!htmlNode) {
      htmlNode = document.createElement('div');
      htmlNode.id = containerId
      document.body.appendChild(htmlNode);
    }
    const styles = []; Object.keys(style).forEach(k => styles.push(`${k}: ${style[k]}`));
    htmlNode.innerHTML = `<iframe allowFullScreen src="${iframeUrl}" style="${styles.join("; ")}"></iframe>`;
  }

}

export default HorrorCloudSDK;
