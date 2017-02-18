# name: developing-solution
# about: A widget to show developing solutionz
# version: 0.1
# authors: SMHassanAlavi
register_asset 'stylesheets/user-widget.scss'

after_initialize do
  SiteSetting.class_eval do
    @choices[:layouts_sidebar_right_widgets].push('developing-solution')
  end
end
