export interface IPlayOption {
    containerId?: string;
    style?: Record<string, any>;
}
export declare class HorrorCloudSDK {
    partnerCode: string;
    constructor(partnerCode: string);
    play: (productId: string, options?: IPlayOption) => void;
}
