import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { NewComment, Comment } from 'src/app/interfaces/comment';
import { NewTweet, Tweet } from 'src/app/interfaces/tweet';
import { TweetsService } from 'src/app/services/tweets/tweets.service';
import { ToastService } from 'src/app/shared/toast.service';
import { ToastTypes } from 'src/app/enums/toast-types.enum';
import { UniLoaderService } from 'src/app/shared/uniLoader.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.page.html',
  styleUrls: ['./new-comment.page.scss'],
})
export class NewCommentPage implements OnInit {
  tweet: Tweet;

  newComment = {} as NewCommentPage;

  commentToEdit: Comment;

  editMode = false;


  constructor(
    private modalCtrl: ModalController,
    private commentsService: TweetsService,
    private navParams: NavParams,
    private toastService: ToastService,
    private uniLoader: UniLoaderService
  ){}

  ngOnInit() {
    this.tweet= this.navParams.get('tweet');
   this.commentToEdit = this.navParams.get('comment');
   this.editMode = this.commentToEdit !== undefined;
  }
/*
  async createOrEditComment() {

    try {

      // Avvio il loader
      await this.uniLoader.show();

      if (this.editMode) {

        // Chiamo la editTweet se l'utente sta modificando un tweet esistente
        await this.commentsService.editComment(this.commentToEdit);

      } else {

        // Chiamo la createTweet se l'utente sta creando un nuovo tweet
        await this.commentsService.createComment(this.newComment);
      }

      // Chiudo la modal
      await this.dismiss();

    } catch (err) {

      // Nel caso la chiamata vada in errore, mostro l'errore in un toast
      await this.toastService.show({
        message: err.message,
        type: ToastTypes.ERROR
      });

    }

    // Chiudo il loader
    await this.uniLoader.dismiss();

  }

  isDataInvalid(): boolean {

    if (this.newComment.comment) {
      return !this.newComment.comment.length ||
      this.newComment.comment.length > 120;
    }

    return true;

  }

}
*/
}
