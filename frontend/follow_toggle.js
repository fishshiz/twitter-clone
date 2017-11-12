class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user_id') || options.userId;
    this.followState = this.$el.data('initial_follow_state') || options.followState;
    render();
  }
  
  render() {
    switch(this.followState) {
      case 'followed':
      this.$el.prop('disabled', false);
      this.$el.html('Unfollow!');
      break;
      case 'unfollowed':
      this.$el.prop('disabled', false);
      this.$el.html('Follow!');
      break;
      case 'following':
      this.$el.prop('disabled', true);
      this.$el.html('Following...');
      break;
      case 'unfollowing':
      this.$el.prop('diabled', true);
      this.$el.html('Unfollowing...');
      break;
    }
  }
}

module.exports = FollowToggle;