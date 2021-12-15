import OlBaseLayer from 'ol/layer/Base';
import OlLayer from 'ol/layer/Layer';
import OlImageWMS from 'ol/source/ImageWMS';
import OlTileWMS from 'ol/source/TileWMS';
import OlImageLayer from 'ol/layer/Image';
import OlTileLayer from 'ol/layer/Tile';
export declare type WmsLayer = OlImageLayer<OlImageWMS> | OlTileLayer<OlTileWMS>;
export declare function isWmsLayer(layer: OlBaseLayer): layer is OlLayer<OlImageWMS | OlTileWMS>;
export declare function isImageOrTileLayer(layer: OlBaseLayer): layer is WmsLayer;
