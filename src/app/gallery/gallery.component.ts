/**
 * Created by rohan on 20/9/17.
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: '../gallery/gallery.component.html',
  styleUrls: ['../gallery/gallery.component.css']
})

export class HumanComponent implements OnInit {
  human_image0: String;
  human_image1: String;
  human_heading1: String;
  human_heading2: String;
  human_description0: String;
  human_story_list: [{
    id: number,
    image: any,
    name: any,
    human_story_details_more: {
      image_more: any;
      content_more: any;
    },
    human_story_details_less: {
      image_less: any;
      content_less: any;
    },
  }];

  showHide0: boolean[] = [];
  showHide1: boolean[] = [];
  showHide2: boolean[] = [];
  showHide3: boolean[] = [];
  show0: any;
  show1: any;

  constructor() {}

  ngOnInit() {
    this.human_image0 = 'assets/img/boat_01.jpeg';
    this.human_image1 = 'assets/img/boat_01.jpeg';
    this.human_heading1 = 'Gallery Page';
    this.human_heading2 = 'Hope it is useful to you!';
    this.human_description0 = 'This is an image grid gallery which further expand into two collapsible rows on click. To try click on any image below and see the magic happen!  ';
    this.human_story_list = [
      {
        id: 0, image: 'assets/img/camping_01.jpeg', name: 'Image 1  ',
        human_story_details_more:
          {
            image_more: 'assets/img/boat_01.jpeg',
            content_more: 'This is first image and it is first description. Click on the read more button to open the next row'
          },
        human_story_details_less:
          {
            image_less: 'assets/img/camping_02.jpeg',
            content_less: 'This is first image and it is second description. Click on the read less button to close this row. Else click on the up-arrow to close this and the previously opened row.'
          }
      },
      {
        id: 1, image: 'assets/img/boat_02.jpeg', name: ' Image 2',
        human_story_details_more:
          {
            image_more: 'assets/img/library_02.jpeg',
            content_more: 'This is second image and it is first description. Click on the read more button to open the next row'
          },
        human_story_details_less:
          {
            image_less: 'assets/img/camping_03.jpeg',
            content_less: 'This is second image and it is second description. Click on the read less button to close this row. Else click on the up-arrow to close this and the previously opened row.'
          },
      },
      {
        id: 2, image: 'assets/img/boat_03.jpeg', name: 'Image 3 ',
        human_story_details_more:
          {
            image_more: 'assets/img/camping_04.jpg',
            content_more: 'This is third image and it is first description. Click on the read more button to open the next row'
          },
        human_story_details_less:
          {
            image_less: 'assets/img/library_05.jpeg',
            content_less: 'This is third image and it is second description. Click on the read less button to close this row. Else click on the up-arrow to close this and the previously opened row.'
          },

      },
      {
        id: 3, image: 'assets/img/boat_05.jpeg', name: 'Image 4',
        human_story_details_more:
          {
            image_more: 'assets/img/camping_05.jpeg',
            content_more: 'This is fourth image and it is first description. Click on the read more button to open the next row'
          },
        human_story_details_less:
          {
            image_less: 'assets/img/camping_07.jpeg',
            content_less: 'This is fourth image and it is second description. Click on the read less button to close this row. Else click on the up-arrow to close this and the previously opened row.'
          },
      },
    ];
  }

  openDiv0(i) {
    this.show0 = i;
    this.showHide0[i] = !this.showHide0[i];
    this.showHide1[this.show1] = false;
  }

  openDiv1(i) {
    this.show1 = i;
    this.showHide1[i] = !this.showHide1[i];
    this.showHide0[this.show0] = false;
  }

  openDiv2(i) {
    this.showHide2[i] = !this.showHide2[i];
  }

  openDiv3(i) {
    this.showHide3[i] = !this.showHide3[i];
  }
}
