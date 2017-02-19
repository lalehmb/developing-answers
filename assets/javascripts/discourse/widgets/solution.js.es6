import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import { avatarImg } from 'discourse/widgets/post';
import { cook } from 'discourse/lib/text';
import RawHtml from 'discourse/widgets/raw-html';
import showModal from 'discourse/lib/show-modal';
import Composer from 'discourse/models/composer';
import { getOwner } from 'discourse-common/lib/get-owner';
import NotificationsButton from 'discourse/components/notifications-button';
import { ajax } from 'discourse/lib/ajax';




export default createWidget('developing-solution', {
  tagName: 'div.developing-solution.widget-container',
  buildKey: (attrs) => 'developing-solution',

  defaultState(attrs) {
    return {
      topic: attrs.topic,
      bookmarked: attrs.topic ? attrs.topic.bookmarked : null
    }
  },

  canInviteToForum() {
    return Discourse.User.currentProp('can_invite_to_forum');
  },

  toggleBookmark() {
    this.state.bookmarked = !this.state.bookmarked
    const topicController = this.register.lookup('controller:topic')
    topicController.send('toggleBookmark')
  },

  sendShowLogin() {
    const appRoute = this.register.lookup('route:application');
    appRoute.send('showLogin');
  },

  sendShowCreateAccount() {
    const appRoute = this.register.lookup('route:application');
    appRoute.send('showCreateAccount');
  },

  showInvite() {
    const topicRoute = this.register.lookup('route:topic');
    topicRoute.send('showLogin');
  },

  createTopic() {
    const cController = this.register.lookup('controller:composer');
    const dtController = this.register.lookup('controller:discovery/topics');
    cController.open({
      categoryId: dtController.get('category.id'),
      action: Composer.CREATE_TOPIC,
      draftKey: dtController.get('model.draft_key'),
      draftSequence: dtController.get('model.draft_sequence')
    });
  },

  html(attrs, state) {
    const { currentUser } = this;
    const topic = state.topic;
    let contents = [];
    var view1 = 0, view2 = 0, view3 = 0, view4 = 0, view5 = 0;
    const cate = attrs.category;
    const path = getOwner(this).lookup('controller:application').get('currentPath');

    if (path == "discovery.latest")
    {
          contents.push(h("h2.titleSolution", "راهکار های در حال تکمیل"));

           $.ajax({
          url: "/t/3854.json",
          dataType: 'json',
          async: false,
          success: function(data){
              view2 = data.views;
          }});

           $.ajax({
          url: "/t/3766.json",
          dataType: 'json',
          async: false,
          success: function(data){
              view3 = data.views;
          }});

           $.ajax({
          url: "/t/2568.json",
          dataType: 'json',
          async: false,
          success: function(data){
              view1 = data.views;
          }});

           $.ajax({
          url: "/t/3914.json",
          dataType: 'json',
          async: false,
          success: function(data){
              view3 = data.views;
          }});

           $.ajax({
          url: "/t/3941.json",
          dataType: 'json',
          async: false,
          success: function(data){
              view5 = data.views;
          }});


           contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/ایده‌ی-بی‌نام-ایستگاه-های-تولید-بیوگازاز-دورریزهای-غذا/2568/44"}}, h("img", {attributes:{src: "http://padpors-s3.s3-us-west-2.amazonaws.com/original/2X/2/24480d95ec4670d808fb2df66e89ffeca773529d.jpg"}})),
            h("a.topiclink",{attributes: {href: "/t/ایده‌ی-بی‌نام-ایستگاه-های-تولید-بیوگازاز-دورریزهای-غذا/2568/44"}}, "رآکتور بیوگاز"),
            h("a.novacate", {attributes:{ href: "/c/nova-foodwaste"}}, "آلودگی هوا") ,
            h("span", "بازدید:" + view1),
            h("div.level", Discourse.SiteSettings.developing_1)]));

          contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/پیاده-برو،-پاداش-بگیر/3854/16"}}, h("img", {attributes:{src: "/uploads/default/original/2X/b/bc3193226e585369203759614351be531027ee35.png"}})),
            h("a.topiclink",{attributes: {href: "/t/پیاده-برو،-پاداش-بگیر/3854/16"}}, "پیاده برو، پاداش بگیر!"),
            h("a.novacate", {attributes:{ href: "/c/nova-pollution"}}, "آلودگی هوا") ,
            h("span", "بازدید:" + view2),
            h("div.level", Discourse.SiteSettings.developing_2)]));

          contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/ادامه-کارابتکار-جمعی-برای-ترویج-استفاده-از-مترو-با-هدف-کاهش-آلودگی-هوا/3914"}}, h("img", {attributes:{src: "/uploads/default/original/2X/7/757f21137eed52ee8d900c7d2be1363a8a09c9db.jpg"}})),
            h("a.topiclink",{attributes: {href: "/t/ادامه-کارابتکار-جمعی-برای-ترویج-استفاده-از-مترو-با-هدف-کاهش-آلودگی-هوا/3914"}}, "رادیو مترو"),
            h("a.novacate", {attributes:{ href: "/c/nova-pollution"}}, "آلودگی هوا") ,
            h("span", "بازدید:" + view3),
            h("div.level", Discourse.SiteSettings.developing_3)]));

          contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/چه-جوری-درختکاری-چریکی-رو-به-نفع-هوای-آلوده-رواج-بدیم؟/3766"}}, h("img", {attributes:{src: "/uploads/default/original/2X/a/a108008aa898c49f18e4ba34f453de013814ca40.png"}})),
            h("a.topiclink",{attributes: {href: "/t/چه-جوری-درختکاری-چریکی-رو-به-نفع-هوای-آلوده-رواج-بدیم؟/3766"}}, "درخت کاری چریکی"),
            h("a.novacate", {attributes:{ href: "/c/nova-pollution"}}, "آلودگی هوا") ,
            h("span", "بازدید:" + view4),
            h("div.level", Discourse.SiteSettings.developing_4)]));

          contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/بهبود-مشکلات-دوچرخه-سواری-در-تهران-برای-کاهش-آلودگی-هوا/3941"}}, h("img", {attributes:{src: "https://padpors.com/uploads/default/original/2X/e/eb1bad0b592d0704a8260795db9cd13e9b4cb635.png"}})),
            h("a.topiclink",{attributes: {href: "/t/بهبود-مشکلات-دوچرخه-سواری-در-تهران-برای-کاهش-آلودگی-هوا/3941"}}, "مسیر های مرئی دوچرخه"),
            h("a.novacate", {attributes:{ href: "/c/nova-pollution"}}, "آلودگی هوا") ,
            h("span", "بازدید:" + view5),
            h("div.level", Discourse.SiteSettings.developing_5)]));

    }
    else if (cate && topic == undefined) 
    {
        contents.push(h("h2", "برترین‌ها"));
        var data;
        var new_topic;
        $.ajax({
          url: "c/" + cate.slug + "/l/top/weekly.json",
          dataType: 'json',
          async: false,
          success: function(res){
              data = res;
          }});
        if (data.topic_list.topics.length == 0) 
        {
            $.ajax({
          url: "c/" + cate.slug + "/l/top/monthly.json",
          dataType: 'json',
          async: false,
          success: function(res){
              data = res;
          }});
        }
        if (data.topic_list.topics.length == 0) 
        {
            $.ajax({
          url: "c/" + cate.slug + "/l/top/quarterly.json",
          dataType: 'json',
          async: false,
          success: function(res){
              data = res;
          }});
        }
        if (data.topic_list.topics.length == 0) 
        {
            $.ajax({
          url: "c/" + cate.slug + "/l/top/yearly.json",
          dataType: 'json',
          async: false,
          success: function(res){
              data = res;
          }});
        }
        if (data.topic_list.topics.length == 0) 
        {
            $.ajax({
          url: "c/" + cate.slug + "/l/top/all.json",
          dataType: 'json',
          async: false,
          success: function(res){
              data = res;
          }});
        }
        for (var i = 0 ; i < data.topic_list.topics.length ; i++)
        {
            new_topic = data.topic_list.topics[i];
            var imgUrl;
            if(new_topic.image_url)
                imgUrl = new_topic.image_url;
            else
                imgUrl = "/uploads/default/original/2X/e/e4642d67129d101367059711444b00b266555418.jpg";
            contents.push(h("div.solution",[
            h("a.image-sulotion", {attributes: {href: "/t/" + new_topic.title + "/" + new_topic.id }}, h("img", {attributes:{src: imgUrl}})),
            h("a.topiclink",{attributes: {href: "/t/" + new_topic.title + "/" + new_topic.id }}, new_topic.title),
            h("span", "بازدید:" + new_topic.views)]));
            if (i == 5)
                break;
        }
    }
    return h('div.widget-inner', contents);
  }

});
