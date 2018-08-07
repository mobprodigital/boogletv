import { Injectable } from '@angular/core';
import { AjaxService } from '../../../services/ajax/ajax.service';
import { VideoCategory } from '../../../models/video-category.model';
import { Video } from '../../../models/video.model';
import { VideoSource } from '../../../enums/videosource.enum';


@Injectable()
export class VideoService {

  constructor(private _ajaxService: AjaxService) {
    this.feedTempVideo();
  }


  private videoList: Video[] = [];

  /**
   * Get all video categories
   */
  public getAllCategories(): Promise<VideoCategory[]> {
    let videoCategoryList: VideoCategory[] = [
      new VideoCategory('Movie', 'vidcat1', [
        new VideoCategory('Action', 'vidcat13'),
        new VideoCategory('Comedy', 'vidcat14'),
        new VideoCategory('Hollywood', 'vidcat12'),
      ]),
      new VideoCategory('Kids', 'vidcat2', [
        new VideoCategory('Poem', 'vidcat21'),
        new VideoCategory('Toons', 'vidcat22'),
      ]),
      new VideoCategory('Travel', 'vidcat3', [
        new VideoCategory('Islands', 'vidcat31'),
        new VideoCategory('Mountains', 'vidcat32'),
      ]),
    ];


    return new Promise((resolve, reject) => {
      resolve(videoCategoryList);
    })

  }

  public getAllVideos(): Promise<Video[]> {
    return Promise.resolve(this.videoList);
  }

  public getVideoById(videoId: string): Promise<Video> {
    return new Promise((resolve, reject) => {
      let videoFound = this.videoList.find(vid => vid.id == videoId);
      if (videoFound) {
        resolve(videoFound);
      }
      else {
        reject('video not found');
      }

    })
  }

  private feedTempVideo() {
    //#region movies

    let _movie1 = new Video();
    _movie1.id = 'vid1';
    _movie1.title = 'Johnny English Strikes Again';
    _movie1.likesCount = 120;
    _movie1.description = `The new adventure begins when a cyberattack reveals the identities of all active undercover agents in Britain, leaving Johnny English as the secret service's last hope. Called out of retirement, English dives headfirst into action with the mission to find the mastermind hacker. As a man with few skills and analogue methods, Johnny English must overcome the challenges of modern technology to make this mission a success.`;
    _movie1.dislikesCount = 12;
    _movie1.duration = '00:02:50';
    _movie1.viewsCount = 1351;
    _movie1.videoSource = VideoSource.File;
    _movie1.thumbnails.large = '/assets/videodata/Movie/Johnny_English_Strikes_Again/images/large.jpg';
    _movie1.thumbnails.medium = '/assets/videodata/Movie/Johnny_English_Strikes_Again/images/medium.jpg';
    _movie1.thumbnails.small = '/assets/videodata/Movie/Johnny_English_Strikes_Again/images/small.jpg';
    _movie1.src = '/assets/videodata/Movie/Johnny_English_Strikes_Again/video/Johnny English Strikes Again.mp4';
    _movie1.categories = [
      new VideoCategory('Movie', 'vidcat1'),
      new VideoCategory('Hollywood', 'vidcat12'),
      new VideoCategory('Comedy', 'vidcat14'),
    ]

    let _movie2 = new Video();
    _movie2.id = 'vid2';
    _movie2.title = 'The Condemned 2007';
    _movie2.description = `A convict on death row is bought by a rich TV producer and is transported to a secluded island to fight against nine other condemned murderers. Liberty is for the only survivor of this contest.`;
    _movie2.thumbnails.large = '/assets/videodata/Movie/The_Condemned_2007/images/large.jpg';
    _movie2.duration = '00:01:46';
    _movie2.thumbnails.medium = '/assets/videodata/Movie/The_Condemned_2007/images/medium.jpg';
    _movie2.thumbnails.small = '/assets/videodata/Movie/The_Condemned_2007/images/small.jpg';
    _movie2.likesCount = 114;
    _movie2.dislikesCount = 2;
    _movie2.viewsCount = 1441;
    _movie2.videoSource = VideoSource.File;
    _movie2.src = '/assets/videodata/Movie/The_Condemned_2007/video/The Condemned (2007) Official Trailer 1 - Steve Austin Movie.mp4';
    _movie2.categories = [
      new VideoCategory('Movie', 'vidcat1', [
      ]),
      new VideoCategory('Hollywood', 'vidcat12'),
      new VideoCategory('Action', 'vidcat13'),

    ];


    let _movie3 = new Video();
    _movie3.id = 'vid7';
    _movie3.title = 'The Dark Knight (2008) Official Trailer #1';
    _movie3.description = `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind, who wants to bring all the heroes down to his level.`;
    _movie3.thumbnails.large = '/assets/videodata/Movie/the_dark_knight/images/large.jpg';
    _movie3.duration = '00:02:30';
    _movie3.thumbnails.medium = '/assets/videodata/Movie/the_dark_knight/images/medium.jpg';
    _movie3.thumbnails.small = '/assets/videodata/Movie/the_dark_knight/images/small.jpg';
    _movie3.likesCount = 3900;
    _movie3.dislikesCount = 75;
    _movie3.viewsCount = 702515;
    _movie3.videoSource = VideoSource.Youtube;
    _movie3.src = 'EXeTwQWrcwY';
    _movie3.categories = [
      new VideoCategory('Movie', 'vidcat1'),
      new VideoCategory('Hollywood', 'vidcat12'),
      new VideoCategory('Action', 'vidcat13'),
      new VideoCategory('Drama', 'vidcat14'),

    ]



    //#endregion 

    //#region kids

    let _kids1 = new Video();
    _kids1.id = 'vid3';
    _kids1.title = 'Chhota Bheem';
    _kids1.description = `Bheem is an extremely brave, strong and intelligent young boy. All the children in the town are very fond of him, as he always manages to solve everyone's problems.`;
    _kids1.likesCount = 1212;
    _kids1.duration = '00:02:59';
    _kids1.dislikesCount = 42;
    _kids1.viewsCount = 1351512;
    _kids1.videoSource = VideoSource.File;
    _kids1.src = '/assets/videodata/Kids/Chhota_Bheem/video/Chhota Bheem.mp4';
    _kids1.thumbnails.large = '/assets/videodata/Kids/Chhota_Bheem/images/large.jpg';
    _kids1.thumbnails.medium = '/assets/videodata/Kids/Chhota_Bheem/images/medium.jpg';
    _kids1.thumbnails.small = '/assets/videodata/Kids/Chhota_Bheem/images/small.jpg';
    _kids1.categories = [
      new VideoCategory('Kids', 'vidcat2', [
      ]),
      new VideoCategory('Toons', 'vidcat22'),

    ]

    let _kids2 = new Video();
    _kids2.id = 'vid4';
    _kids2.title = 'Baa Baa Black Sheep - The Joy of Sharing!';
    _kids2.likesCount = 114;
    _kids2.description = `"Baa, Baa, Black Sheep" is an English nursery rhyme, the earliest surviving version of which dates from 1731. The words have not changed very much in two-and-a-half centuries. It is sung to a variant of the 1761 French melody Ah! vous dirai-je, maman. Uncorroborated theories have advanced to explain the meaning of the rhyme. These include it is a complaint against taxes levied on the Medieval English wool trade and it is about the slave trade. In the twentieth century it was a subject of controversies in debates about political correctness. It has been used in literature and popular culture as a metaphor and allusion. The Roud Folk Song Index classifies the lyrics and their variations as number 4439.`;
    _kids2.dislikesCount = 2;
    _kids2.duration = '00:02:38';
    _kids2.viewsCount = 1441;
    _kids2.videoSource = VideoSource.File;
    _kids2.thumbnails.large = '/assets/videodata/Kids/Baa_Baa_Black_Sheep/images/large.jpg';
    _kids2.thumbnails.medium = '/assets/videodata/Kids/Baa_Baa_Black_Sheep/images/medium.jpg';
    _kids2.thumbnails.small = '/assets/videodata/Kids/Baa_Baa_Black_Sheep/images/small.jpg';
    _kids2.src = '/assets/videodata/Kids/Baa_Baa_Black_Sheep/video/Baa Baa Black Sheep - The Joy of Sharing!.mp4';
    _kids2.categories = [
      new VideoCategory('Kids', 'vidcat2', [
      ]),
      new VideoCategory('Poem', 'vidcat21'),

    ];

    //#endregion 

    //#region travel

    let _travel1 = new Video();
    _travel1.id = 'vid5';
    _travel1.title = 'Andaman';
    _travel1.likesCount = 125;
    _travel1.dislikesCount = 52;
    _travel1.duration = '00:02:50';
    _travel1.description = `The Andaman Islands form an archipelago in the Bay of Bengal between India, to the west, and Myanmar, to the north and east. Most are part of the Andaman and Nicobar Islands Union Territory of India, while a small number in the north of the archipelago, including the Coco Islands, belong to Myanmar.`;
    _travel1.viewsCount = 145;
    _travel1.videoSource = VideoSource.File;
    _travel1.src = '/assets/videodata/Travel/Andaman/video/ANDAMAN - India  Travel Video  2017.mp4';
    _travel1.thumbnails.large = '/assets/videodata/Travel/Andaman/images/large.jpg';
    _travel1.thumbnails.medium = '/assets/videodata/Travel/Andaman/images/medium.jpg';
    _travel1.thumbnails.small = '/assets/videodata/Travel/Andaman/images/small.jpg';
    _travel1.categories = [
      new VideoCategory('Travel', 'vidcat3', [
      ]),
      new VideoCategory('Islands', 'vidcat31'),
    ]

    let _travel2 = new Video();
    _travel2.id = 'vid6';
    _travel2.title = 'This is Switzerland';
    _travel2.description = `Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned.`;
    _travel2.likesCount = 114;
    _travel2.duration = '00:04:04';
    _travel2.dislikesCount = 2;
    _travel2.viewsCount = 1441;
    _travel2.videoSource = VideoSource.File;
    _travel2.src = '/assets/videodata/Travel/This_is_Switzerland_4k/video/This is Switzerland 4k.mp4';

    _travel2.thumbnails.large = '/assets/videodata/Travel/This_is_Switzerland_4k/images/large.jpg';
    _travel2.thumbnails.medium = '/assets/videodata/Travel/This_is_Switzerland_4k/images/medium.jpg';
    _travel2.thumbnails.small = '/assets/videodata/Travel/This_is_Switzerland_4k/images/small.jpg';
    _travel2.categories = [
      new VideoCategory('Travel', 'vidcat3', [
      ]),
      new VideoCategory('Mountains', 'vidcat32'),

    ];

    //#endregion

    this.videoList = [_movie1, _movie2, _movie3, _kids1, _kids2, _travel1, _travel2];
  }

}
