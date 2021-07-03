
class ArticModel {
  constructor(obj) {
    this.title = obj.title;
    this.thumbnail = obj.thumbnail.lqip;
    this.artist_name=obj.artist_title;
    this.description=obj.credit_line;
  }
}
module.exports=ArticModel;
