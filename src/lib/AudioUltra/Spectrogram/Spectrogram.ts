import { Waveform } from '../Waveform';
import { Visualizer } from '../Visual/Visualizer';
import { Layer } from '../Visual/Layer';

export interface SpectrogramOptions {
}

export class Spectrogram {
    private waveform: Waveform;
    private visualizer: Visualizer;
    private layer: Layer;

    constructor(options: SpectrogramOptions, waveform: Waveform, visualizer: Visualizer){
        this.waveform = waveform;
        this.visualizer = visualizer;
        this.options = options;
    }


}