import { Injectable } from '@nestjs/common';
const { createCanvas, Image } = require('canvas');

@Injectable()
export class PhotoProcessingService {
  constructor() {}

  getColorPalette(image: Buffer): Array<any> {
    let img = new Image();
    img.src = image;
    let canvas = createCanvas(img.width, img.height);
    let width = canvas.width = img.width;
    let height = canvas.height = img.height;
    let context = canvas.getContext('2d');

    context.drawImage(img, 0, 0, width, height);
    let imageData  = context.getImageData(0, 0, width, height);
    let pixels     = imageData.data;
    let pixelCount = width * height;

    let pixelArray = [];
    for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + 10) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3];
        if (a >= 125) {
          pixelArray.push([r, g, b]);
        }
    }
    return pixelArray;
  }
}
