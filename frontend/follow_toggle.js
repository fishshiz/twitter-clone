class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user_id') || options.userId;
    this.followState = this.$el.data('initial_follow_state') || options.followState;
    render();
    handleClick();
  }
  
  handleClick(event) {
    const followToggle = this;
    
    event.preventDefault();
    
    if(this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      
      $.ajax({
        url: 'users/{this.userId}/follow',
        dataType: 'json',
        method: 'POST'
      })
      
    } else {
      this.followState = 'unfollowed';
      this.render();
      
      $.ajax({
        url: 'users/{this.userId}/follow',
        dataType: 'json',
        method: 'DELETE'
      })
    }
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