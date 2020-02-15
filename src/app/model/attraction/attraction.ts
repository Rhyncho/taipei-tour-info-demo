import { Data, Mapping } from 'decorator-data';

import { Image } from '../image/image';

@Data
export class Attraction {

  @Mapping({
    typeRef: ''
  })
  address: string;

  @Mapping({
    nullable: true,
    typeRef: 0
  })
  id: number;

  @Mapping({
    typeRef: [new Image({})]
  })
  images: Image[];

  @Mapping({
    typeRef: ''
  })
  introduction: string;

  @Mapping({
    typeRef: ''
  })
  name: string;

  @Mapping({
    typeRef: ''
  })
  url: string;

  constructor(data?: any) {}

  get titleImage(): string {
    let output = '';
    if (this.images[0]) {
      output = this.images[0].src;
    }
    return output;
  }

}
