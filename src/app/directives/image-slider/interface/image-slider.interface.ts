/**
 * Image slider
 */
export interface ImageSlider {
    /**
     * Array of images used in slider
     */
    ImageSlideList: Array<ImageSliderImage>
}

/**
 * Single image to be used in image slider
 */
export interface ImageSliderImage {
    imagePath: string;
    href: string;
    title: string;
    metaData: Array<{
        /** font awesome 5 icon class name */
        faClassName: string;
        /** Text to display alongside icon */
        text: string;
    }>
}
