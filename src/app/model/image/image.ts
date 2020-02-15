import { Data, Mapping } from 'decorator-data';

@Data
export class Image {

  @Mapping({
    typeRef: ''
  })
  src: string;

  @Mapping({
    typeRef: ''
  })
  subject: string;

  constructor(data) {}

}
